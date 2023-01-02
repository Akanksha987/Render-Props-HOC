import PostHOC from "./PostHOC"

function LikeImageHoc(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}

export default PostHOC(LikeImageHoc)