package main

type MyStack struct {
	queue1 []int
	queue2 []int
}

func Constructor() MyStack {
	return MyStack{
		queue1: []int{},
		queue2: []int{},
	}
}

func (this *MyStack) Push(x int) {
	this.queue2 = append(this.queue2, x)

	for len(this.queue1) > 0 {
		this.queue2 = append(this.queue2, this.queue1[0])
		this.queue1 = this.queue1[1:]
	}

	this.queue1, this.queue2 = this.queue2, this.queue1
}

func (this *MyStack) Pop() int {
	if len(this.queue1) <= 0 {
		return -1
	}

	top := this.queue1[0]
	this.queue1 = this.queue1[1:]
	return top
}

func (this *MyStack) Top() int {
	if len(this.queue1) == 0 {
		return -1
	}

	return this.queue1[0]
}

func (this *MyStack) Empty() bool {
	return len(this.queue1) == 0
}
