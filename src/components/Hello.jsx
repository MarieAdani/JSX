import React from "react";

class Hello extends React.Component{

    render (){
        
        return(

            <div className="d-block">
                <h1 className="position-absolute top-0 start-50 translate-middle-x">Hello Dojo!</h1>
                <h3 className="mt-5 ms-5">Things I need to do:</h3>
            </div>
        )

    }

}

export default Hello;