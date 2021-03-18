
mylist = [1, 2, 3]

def func():
    # global mylist
    mylist = []
    def func2():
        nonlocal mylist
        mylist = [20, 30]
    func2()
    mylist.append(20);
    print(mylist)
func()

print(mylist)