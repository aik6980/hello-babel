class A {
    constructor()
    {
        this.m_a = 5;
    }
}

window.onload = function(){
    let a = new A();
    console.log(10);
    a.m_a = "aaa";
    console.log(a);
}