import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { CSSProperties, MouseEvent } from 'react'
import AceEditor, { AceEditorProps } from 'react-ace'
import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'
import EditorPreview, { IEditorPreviewProps } from './EditorPreview'
import { eventStack, doesNodeContainClick } from 'src/lib'

const parentComponents = []

// Set up custom completers by using a ace extension
// https://github.com/thlorenz/brace/issues/19
const languageTools = ace.acequire('ace/ext/language_tools')

const semanticUIReactCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    const completions = []

    _.each(parentComponents, component => {
      const { name } = component._meta
      // Component
      completions.push({ caption: name, value: name, meta: 'Component' })

      // Its props (propTypes do not exist in prod, use handledProps added by babel)
      _.each(component.handledProps, propName => {
        // don't add duplicate prop completions
        if (_.find(completions, { value: propName })) return

        completions.push({ caption: propName, value: propName, meta: 'Component Prop' })
      })
    })
    callback(null, completions)
  },
}

languageTools.addCompleter(semanticUIReactCompleter)

export interface IEditorProps extends AceEditorProps {
  id: string
  value: string
  mode?: 'html' | 'jsx'
  onClick?: () => void
  onOutsideClick?: (e: Event) => void
  active?: boolean
  showCursor?: boolean
  preview?: IEditorPreviewProps
}

class Editor extends React.Component<IEditorProps> {
  private lineCount: number
  private showPreview: boolean

  private static readonly refName = 'aceEditor'

  public static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['html', 'jsx']),
    onClick: PropTypes.func,
    onOutsideClick: PropTypes.func,
    active: PropTypes.bool,
    showCursor: PropTypes.bool,
    preview: PropTypes.object,
  }

  public static defaultProps: IEditorProps = {
    id: '',
    value: '',
    mode: 'jsx',
    theme: 'tomorrow',
    height: '100px',
    width: '100%',
    active: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    editorProps: { $blockScrolling: Infinity },
    showPrintMargin: false,
    tabSize: 2,
    maxLines: Infinity,
    readOnly: false,
    highlightActiveLine: true,
    showCursor: true,
    preview: {
      size: 0,
      label: 'Show more',
    },
  }

  constructor(props: IEditorProps) {
    super(props)

    this.setLineCount(props.value)
    this.setShouldShowPreviewFlag(props)
  }

  public componentWillReceiveProps(nextProps: IEditorProps) {
    const previousPros = this.props
    const { value, active, showCursor, readOnly } = nextProps

    if (showCursor !== previousPros.showCursor) {
      this.setCursorVisibility(showCursor)
    }

    if (readOnly !== previousPros.readOnly) {
      this.setReadonlyStyles(readOnly)
    }

    if (value !== previousPros.value) {
      this.setLineCount(value)
      this.setShouldShowPreviewFlag(nextProps)
    }

    if (active !== previousPros.active) {
      this.setShouldShowPreviewFlag(nextProps)

      if (active) {
        this.editor.focus() // focus editor when editor is active
        this.addDocumentListener()
      } else {
        this.removeDocumentListener()
      }
    }
  }

  public componentDidMount() {
    const { active, showCursor, readOnly } = this.props

    this.setCursorVisibility(showCursor)
    this.setReadonlyStyles(readOnly)

    if (active) {
      this.addDocumentListener()
    }
  }

  public componentWillUnmount() {
    this.removeDocumentListener()
  }

  public render() {
    const { id, active, onClick, showCursor, preview, maxLines, ...rest } = this.props

    return (
      <div onClick={onClick} style={{ position: 'relative' } as CSSProperties}>
        <AceEditor
          name={id}
          maxLines={this.showPreview ? preview.size : maxLines}
          ref={Editor.refName}
          {...rest}
        />
        {this.showPreview && <EditorPreview {...preview} />}
      </div>
    )
  }

  private handleDocumentClick = (e: Event) => {
    const { onOutsideClick } = this.props
    if (!doesNodeContainClick(this.container, e) && onOutsideClick) {
      onOutsideClick(e)
    }
  }

  private addDocumentListener() {
    eventStack.sub('click', this.handleDocumentClick)
  }

  private removeDocumentListener() {
    eventStack.unsub('click', this.handleDocumentClick)
  }

  private get editor() {
    return this.safeCall(() => (this.refs[Editor.refName] as any).editor)
  }

  private get renderer() {
    return this.safeCall(() => this.editor.renderer)
  }

  private get cursor(): HTMLElement {
    return this.safeCall(() => this.renderer.$cursorLayer.element)
  }

  private get container(): HTMLElement {
    return this.safeCall(() => this.renderer.container)
  }

  private setLineCount(value: string) {
    this.lineCount = value && value.length ? (value.match(/\n/g) || []).length + 1 : 0
  }

  private setCursorVisibility(visible: boolean): void {
    this.safeCall(() => {
      this.cursor.style.display = visible ? '' : 'none'
    })
  }

  private setReadonlyStyles(readOnly: boolean): void {
    this.safeCall(() => {
      this.container.style.background = readOnly ? '#f1f1f1' : ''
    })
  }

  private setShouldShowPreviewFlag(props: IEditorProps): void {
    const { active, preview } = props

    this.showPreview = active
      ? false
      : preview && !isNaN(preview.size) && this.lineCount > preview.size
  }

  private safeCall<T>(cb: () => T, logError?: boolean): T {
    try {
      return cb()
    } catch (error) {
      if (logError) {
        console.error(`Editor.tsx:safeCall error: ${error}`)
      }
      return undefined
    }
  }
}

export default Editor
