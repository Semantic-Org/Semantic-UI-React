import PropTypes from 'prop-types'
import React, { CSSProperties } from 'react'
import { Icon, SemanticICONS } from 'semantic-ui-react'

export interface IEditorPreviewProps {
  size: number
  label: string
  icon?: SemanticICONS
}

const staticPreviewStyle: CSSProperties = {
  cursor: 'pointer',
  left: 0,
  right: 0,
  position: 'absolute',
  zIndex: 10,
  opacity: 0.3,
  bottom: 0,
  background: 'linear-gradient(#fff, #fff, #777)',
  width: '100%',
}

const staticLabelStyle: CSSProperties = {
  zIndex: 11,
  opacity: 0.8,
  textAlign: 'center',
  verticalAlign: 'middle',
  fontWeight: 500,
}

class EditorPreview extends React.Component<IEditorPreviewProps> {
  private static readonly lineHeight = 16
  private static readonly labelHeight = 25

  public static propTypes = {
    size: PropTypes.number,
    label: PropTypes.string,
  }

  public static defaultProps: IEditorPreviewProps = {
    size: undefined,
    label: 'Show more',
  }

  constructor(props: IEditorPreviewProps) {
    super(props)
  }

  public render() {
    const { label, size, icon } = this.props

    const previewStyle: CSSProperties = {
      ...staticPreviewStyle,
      height: this.toPx(size * EditorPreview.lineHeight + EditorPreview.labelHeight),
    }

    const labelStyle: CSSProperties = {
      ...staticLabelStyle,
      lineHeight: this.toPx(EditorPreview.labelHeight),
    }

    return (
      <div>
        <div style={previewStyle} />
        <div style={labelStyle}>
          {icon && <Icon name={icon} />}
          {label}
        </div>
      </div>
    )
  }

  private toPx(value: number): string {
    return `${value}px`
  }
}

export default EditorPreview
