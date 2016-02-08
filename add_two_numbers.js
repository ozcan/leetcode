/*

    You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var total = new ListNode();
    var cursor = total;
    var carry = 0;
    
    while (l1 !== null || l2 !== null || carry > 0) {
        cursor.val = carry;
        if (l1) {
            cursor.val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            cursor.val += l2.val;
            l2 = l2.next;
        }
        carry = (cursor.val > 9) ? 1:0;
        cursor.val = cursor.val % 10;
        
        if (l1 !== null || l2 !== null || carry > 0) {
            cursor.next = new ListNode();
            cursor = cursor.next;
        }
    }
    
    return total;
};
