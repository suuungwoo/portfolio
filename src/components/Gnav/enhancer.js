import {compose, setDisplayName, withStateHandlers, lifecycle} from 'recompose';

const scrollTop = () => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const enhance = compose(
  setDisplayName('Gnav'),
  withStateHandlers(
    {scroll: scrollTop()},
    {
      updateScroll: prev => () => ({
        scroll: scrollTop(),
      }),
    }
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.updateScroll);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.updateScroll);
    },
  })
);

export default enhance;
