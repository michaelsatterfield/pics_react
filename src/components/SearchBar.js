import React from 'react';



class SearchBar extends React.Component {
 state = {userInput: ''};



    render() {
        console.log(this.state.userInput)
        return (
            <div className={"ui segment"}>
                <form className={"ui form"}>
                    <div className={"field"}>
                        <label>Image Search</label>
                        {/*    event handler*/}
                        <input type={"text"}
                               value={this.state.userInput}
                               onChange={(e) => this.setState({userInput: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );

    }

}


export default SearchBar;
