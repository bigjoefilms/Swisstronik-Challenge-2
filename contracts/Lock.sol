// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private _data;

    constructor(uint256 _initialData)  payable{
        _data = _initialData;
    }

    function setData(uint256 _newData) public {
       _data = _newData;
    }

    function getData() public view returns (uint256) {
        return _data;
    }
}




// contract Submission {

//     /// @dev private vaiable is named as '_num'
//     uint256 private  _num;


//     constructor(uint _startValue) payable{
//         _num = _startValue;
//     }


//     /// @notice Set a new value for the variable
//     /// @dev Setter function fo the private variable
//     /// @param _newValue it is the new value for the private variable
//     function modify(uint256 _newValue) public{
//         _num = _newValue;
//     }


//     /// @notice Helps to view the current value of the private variable
//     /// @dev Getter function for the private variable
//     /// @return Current value of the private variable
//     function currentValue() public view returns(uint256){
//         return _num;
//     }
// }