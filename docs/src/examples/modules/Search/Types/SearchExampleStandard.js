import _ from 'lodash'
import faker from 'faker'
import React, { useState } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const source = _.times(5, () => ({
      title: faker.company.companyName(),
      description: faker.company.catchPhrase(),
      image: faker.internet.avatar(),
      price: faker.finance.amount(0, 100, 2, '$'),
    }));

const  SearchExampleStandard = props => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  
  const handleResultSelect = (e, { result }) => setValue(result.title);

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);

    setTimeout(() => {
      if (value.length < 1) return setValue(value)

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = (result) => re.test(result.title)

      setIsLoading(false);
      setResults(_.filter(source, isMatch)); 
    }, 300);
  };
    
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(state, null, 2)}
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

export default SearchExampleStandard;
