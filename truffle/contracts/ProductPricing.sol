// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

struct Participant {
  string fullName;
  string email;
  bool gender;
}

contract ProductPricing {
  address private owner;
  uint256 private index;
  mapping(address => uint256) private participantKeys;
  Participant[] private participants;

  constructor() {
    index = 0;
    owner = msg.sender;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  function getParticipants() public view returns(Participant[] memory) {
    return participants;
  }

  function getParticipant(address _addr) public view returns(Participant memory) {
    uint256 indexParticipant = participantKeys[_addr];

    return participants[indexParticipant];
  }

  function addParticipant(Participant memory _par) public {
    participantKeys[msg.sender] = index;
    participants[index] = _par;
    index++;
  }
}
