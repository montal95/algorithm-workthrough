import React from "react";

const Add2Num = () => {
  const list1 = {
    head: {
      value: 9,
      next: {
        value: 4,
        next: {
          value: 7,
          next: null
        }
      }
    }
  };

  console.log("List 1:");
  console.log(list1);

  const list2 = {
    head: {
      value: 2,
      next: {
        value: 0,
        next: {
          value: 9,
          next: null
        }
      }
    }
  };

  console.log("List 2:");
  console.log(list2);

  const addTwoNumbers = (l1, l2) => {
    //set the variables for the sum, new node list, remainder and carried value
    
  };

  return (
    <div className="add2Num">
      <h3>Add Two Numbers Problem</h3>
      <p>
        You are given two non-empty linked lists representing two non-negative
        integers. The digits are stored in reverse order and each of their nodes
        contain a single digit. Add the two numbers and return it as a linked
        list.
      </p>
      <p>
        You may assume the two numbers do not contain any leading zero, except
        the number 0 itself.
      </p>

      <h5>Example:</h5>
      <div className="row">
        <div className="col s10 push-s1 indigo lighten-4">
          <p>
            <span>Input:</span> (9 -> 4 -> 7) + (2 -> 0 -> 9)
          </p>
          <p>
            <span>Output:</span> 1 -> 5 -> 6 -> 1
          </p>
          <p>
            <span>Explanation:</span> 749 + 902 = 1651
          </p>
        </div>
      </div>
    </div>
  );
};

export default Add2Num;
