// 1 บริษัทขายรถ Tesla มีรถจำนวนทั้งหมด 3 รุ่น (a,b,c) ในปีที่ผ่านมาขายไปได้ดังนี้
// a ขายได้ 120 คัน
// b ขายได้ 90 คัน
// c ขายได้ 40 คัน
// จงหาว่าปีที่ผ่านมาขายแต่ละรุ่นไปเป็นจำนวนกี่ % จากยอดขายรถทั้งหมด

const a = 120;
const b = 90;
const c = 40;

var count = a+b+c;

function persent(x) {
    return (x*100)/count
}

console.log("Car type a is "+persent(a)+" %")
console.log("Car type b is "+persent(b)+" %")
console.log("Car type c is "+persent(c)+" %")