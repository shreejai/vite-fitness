
export default function Button(props) {
  const {text, func} = props
  return (
    <button onClick={func} className="border-blue-400 border-solid border-[2px] px-8 py-4 bg-slate-950 blueShadow duration-200 mx-auto">
      <p>{text}</p>
    </button>
  )
}
