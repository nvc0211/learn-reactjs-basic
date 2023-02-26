import React from 'react';

class MyExample extends React.Component {
    handleClickButton = () => {
        alert(`You have just click me`)
    }
    render() {

        return (
            <>
                <div className='first'>
                    My name is Hoang Cuong
                </div>
                <div className='second'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>

                </div>
            </>
        )
    }
};

export default MyExample;