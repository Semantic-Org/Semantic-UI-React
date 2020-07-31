import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const initialState = {
  loading: false,
  results: [],
  query: '',
  selection: undefined,
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, query: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, selection: action.selection }

    default:
      throw new Error()
  }
}

const resultRenderer = ({ title }) => <Label content={title} />

function SearchExampleStandardCustom() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, query, results, selection } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, { value }) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: value })

    timeoutRef.current = setTimeout(() => {
      if (value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, { result }) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: result.title })
          }
          onSearchChange={handleSearchChange}
          resultRenderer={resultRenderer}
          results={results}
          value={query}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>Selection</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(selection, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default SearchExampleStandardCustom
