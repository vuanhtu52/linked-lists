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

    const getHead = () => {
        return head;
    };

    const getTail = () => {
        return tail;
    };

    return {
        append,
        getHead,
        getTail,
    }
};

let list = LinkedList();
list.append("3");
list.append("6");
list.append("9");
list.append("12");
console.log(list.getHead().getValue());
console.log(list.getTail().getValue());