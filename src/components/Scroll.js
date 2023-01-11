function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
        scroll: "hide",
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
