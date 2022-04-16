import Header from "./header";

const layout = (props) => {
    return <div className='layout'>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto  p-2">
                    {props.children}
                </div>
            </div>
        </div>
        </div>
}
export default layout;