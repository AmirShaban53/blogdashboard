import Header from "./header";
const layout = (props) => {
    return <div className='layout'>
        <Header/>
        {props.children}
        </div>
}
export default layout;