function Translate({ arrow, children }) {
  let className = 'translate';
  if (!arrow) {
    className += ' out';
  }
  return <div className={className}>{children}</div>;
}

export default Translate;
