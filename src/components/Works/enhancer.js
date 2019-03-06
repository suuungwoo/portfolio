import {compose, setDisplayName, withStateHandlers, withState} from 'recompose';

const enhance = compose(
  setDisplayName('Works'),
  withState('isModal', 'updateIsModal', false)
  // withStateHandlers(
  //   {isModal: false},
  //   {updateIsModal: props => () => ({isModal: !props.isModal})}
  // )
);

export default enhance;
