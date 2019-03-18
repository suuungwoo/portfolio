import {compose, setDisplayName, withState} from 'recompose';

const enhance = compose(
  setDisplayName('Works'),
  withState('isPortfolioModal', 'updateIsPortfolioModal', false),
  withState('isPlaygroundModal', 'updateIsPlaygroundModal', false)
);

export default enhance;
