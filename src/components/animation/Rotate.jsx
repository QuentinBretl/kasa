function Rotate({ arrow, children }) {
  let className = 'rotate';
  if (!arrow) {
    className += ' out';
  }
  return <div className={className}>{children}</div>;
}

export default Rotate;
