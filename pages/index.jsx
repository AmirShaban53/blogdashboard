import classes from '../styles/dasboard.module.css'
import Card from '../components/card'

export default function Home() {
  return (
    <>
      <main>
        <div className={classes.title}>
          <h1 className='display-1 fw-bolder'>Hello,</h1>
          <h1 className="display-3">Amir Budda.</h1>
        </div>
        <div className=" ">
          <h2>dashboard</h2>
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-8">
                <Card/>
              </div>
              <div className="col-4">
                <Card/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <Card/>
              </div>
              <div className="col-6">
                <Card/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <Card/>
              </div>
              <div className="col-4">
                <Card/>
              </div>
              <div className="col-4">
                <Card/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
