import MakeConnectedComponent from './MakeConnectedComponent';

function connect(Store, ...propNames) {
  return (klass) => {
    let KlassReplacement = MakeConnectedComponent(klass, Store, ...propNames);
    return KlassReplacement;
  };
}

export default connect;