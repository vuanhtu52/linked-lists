const Node = (value = null, nextNode = null) => {
    let _value = value;
    let _nextNode = nextNode;

    const setValue = val => {
        _value = val;
    };

    const getValue = () => {
        return _value;
    };

    const setNextNode = node => {
        _nextNode = node;
    };

    const getNextNode = () => {
        return _nextNode;
    };

    return {
        setValue,
        getValue,
        setNextNode,
        getNextNode,
    };
};

const LinkedList = () => {
    let head = null;
    let tail = null;

    const getHead = () => {
        return head;
    };

    const getTail = () => {
        return tail;
    };

    const append = value => {
        // Special case when the list is empty
        if (head === null && tail === null) {
            let node = Node(value, null);
            head = node;
            tail = node;
        } else {
            let node = Node(value, null);
            tail.setNextNode(node);
            tail = node;
        }
    };

    const prepend = value => {
        // Special case when the list is empty
        if (head === null && tail === null) {
            let node = Node(value, null);
            head = node;
            tail = node;
        } else {
            let node = Node(value, null);
            node.setNextNode(head);
            head = node;
        }
    };

    const size = () => {
        let current = head;
        if (current === null) {
            return 0;
        } else {
            let count = 0;
            while (current != null) {
                current = current.getNextNode();
                count += 1;
            } 
            return count;
        }
    };

    const at = index => {
        if (index < 0) {
            return null;
        }
        let current = head;
        for (let i = 1; i <= index; i++) {
            if (current === null) {
                return current;
            }
            current = current.getNextNode();
        }
        return current;
    };

    const pop = () => {
        // If the linked list is empty
        if (head === null) {
            // Do nothing
        } else {
            // If the linked list has 1 node
            if (head.getNextNode() === null) {
                head = null;
                tail = null;
            } else { // If the linked list has >= 2 nodes
                // Traverse to the last but final node
                let current = head;
                while (current.getNextNode().getNextNode() !== null) {
                    current = current.getNextNode()
                }
                // Move tail to the previous node
                tail = current;
                tail.setNextNode(null);
            }
        }
    };

    const contains = value => {
        let current = head;

        // Return false if the list is empty
        if (current === null) {
            return false;
        }

        // If the list is not empty, traverse to the last node and check
        while (current.getNextNode() !== null) {
            if (current.getValue() === value) {
                return true;
            }
            current = current.getNextNode();
        }
        if (current.getValue() === value) {
            return true;
        }
        return false;
    };

    const find = value => {
        let current = head;

        // Return null if the list is empty
        if (current === null) {
            return null;
        }

        // Traverse to the last node and check each node
        let index = 0;
        while (current.getNextNode() !== null) {
            if (current.getValue() === value) {
                return index;
            }
            current = current.getNextNode();
            index += 1;
        }
        if (current.getValue() === value) {
            return index;
        }
        return null;
    };

    const toString = () => {
        let current = head;
        if (current === null) {
            return "null";
        }
        let stringResult = "";
        while (current.getNextNode() !== null) {
            stringResult += current.getValue().toString() + " --> ";
            current = current.getNextNode();
        }
        // Add the result of the last node
        stringResult += current.getValue() + " --> null";
        return stringResult;
    };

    return {
        getHead,
        getTail,
        append,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
    }
};

let list = LinkedList();
list.append("3");
list.append("6");
list.append("9"); 
list.append("12");

// list.prepend("3");
// list.prepend("6");
// list.prepend("9");
// list.prepend("12");

// list.pop();

// console.log(list.getHead().getValue());
// console.log(list.getTail().getValue());

// console.log(list.getHead());
// console.log(list.getTail());

// console.log(list.size());

console.log(list.find("9"));

console.log(list.toString());