import {compose, setDisplayName, withState} from 'recompose';

const enhance = compose(
  setDisplayName('Works'),
  withState('isModal', 'updateIsModal', false)
);

export default enhance;
