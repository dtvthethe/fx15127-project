// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProductPricing {
  address private owner;
  uint256 private index;
  mapping(address => uint256) private participantKeys;
  mapping(uint256 => string) private participantNames;
  mapping(uint256 => string) private participantEmails;
  mapping(uint256 => bool) private participantGenders;

  constructor() {
    index = 0;
    owner = msg.sender;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  function getParticipant(uint256 _index) public view returns(string memory, string memory, bool) {
    require(index > _index, "User doesn't exist!");

    return (participantNames[_index], participantEmails[_index], participantGenders[_index]);
  }

  function addParticipant(string memory _name, string memory _email, bool _gender) public {
    participantKeys[msg.sender] = index;
    participantNames[index] = _name;
    participantEmails[index] = _email;
    participantGenders[index] = _gender;
    index++;
  }
}
