function umur(){
    let age = prompt("masukkan umur anda");

    if (age <= 13){
        console.log("anda anak-anak")
    }else if (age > 13 && age <20){
        console.log("anda remaja")
    }else if(age >= 40 && age < 60){
        console.log("anda dewasa");
    }else{
        console.log("anda lansia");
    }

    }


for (let wave = 1; wave <= 5; wave++){
    console.log ("wave ke-" + wave);
}


   function hari(){
     let hari = senin
    
    switch (hari) {
        case"1":
            console.log("hari senin");
            break;
        case"2":
            console.log("hari selasa");    
            break;
        case"3":  
            console.log("hari rabu");
           break;     
        case"4":
            console.log("hari kamis");
            break;
        case"5":
            console.log("hari jumat");
            break;
        case"6":
            console.log("hari sabtu");    
            break;
        case"7":
            console.log("hari minggu");    
            break;
    }

   }