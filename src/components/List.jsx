import React from "react";

class List extends React.Component{

    render (){
        
        return(

            <div>

                <ul class="list-group ">
                    <li class="list-group-item mt-5 mx-5" >
                        <input class="form-check-input me-3" type="checkbox" value="" id="firstCheckbox"></input> 
                            <label class="form-check-label" for="firstCheckbox">Learn React</label>
                    </li>
                    <li class="list-group-item mx-5">
                        <input class="form-check-input me-3" type="checkbox" value="" id="secondCheckbox"></input>
                            <label class="form-check-label" for="secondCheckbox">Climb Mt. Everest</label>
                    </li>
                    <li class="list-group-item mx-5">
                        <input class="form-check-input me-3" type="checkbox" value="" id="thirdCheckbox"></input>
                            <label class="form-check-label" for="thirdCheckbox">Run a marathon</label>
                    </li>
                    <li class="list-group-item mx-5">
                        <input class="form-check-input me-3" type="checkbox" value="" id="thirdCheckbox"></input>
                            <label class="form-check-label" for="thirdCheckbox">Feed the cats</label>
                    </li>
                </ul>

            </div>
        
        )

    }

}

export default List;