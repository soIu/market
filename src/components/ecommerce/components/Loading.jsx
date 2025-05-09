import { useSelector } from 'react-redux'
export default function Loading (props){
  const loading = useSelector((state) => state.loading.loading)
  // console.log(loading)
  return(
    <>
      {props.children}
      { (props.force || !loaded) ?
      <div className="fixed top-0 w-screen h-screen flex items-center justify-center bg-black/80">
        <div className="w-10 h-10 animate-spin">
          <img src={require('../img/Loading.svg')} alt="" />
        </div>
      </div> : null}
    </>
  )
}