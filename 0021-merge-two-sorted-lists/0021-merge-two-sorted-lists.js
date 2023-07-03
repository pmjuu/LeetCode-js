/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    
    const newList = new ListNode();
    insert(newList, list1, list2);
    
    function insert(newList, list1, list2) {
        if (!list1 && !list2) return;
        
        if (!list2 || list1?.val < list2.val) {
            newList.val = list1.val;
            if (list1.next || list2) newList.next = new ListNode();
            insert(newList.next, list1.next, list2);
        } else if (!list1 || list1.val >= list2?.val) {
            newList.val = list2.val;
            if (list2.next || list1) newList.next = new ListNode();
            insert(newList.next, list1, list2.next);
        }
    }
    
    return newList;
};