let students= [
    {"_id":{"$oid":"5dc194991c9d4400004c640a"},"name":"Stuart Dent","grade": 6,"scores":[{"subject":"Math","value": 85},{"subject":"English","value": 65},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 95}]},
    {"_id":{"$oid":"5dc1956a1c9d4400004c640c"},"name":"Christine Walls","grade": 7,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 80},{"subject":"Science","value": 85},{"subject":"Social Studies","value": 95}]},
    {"_id":{"$oid":"5dc196c71c9d4400004c640d"},"name":"Mirza Carney","grade": 8,"scores":[{"subject":"Math","value": 55},{"subject":"English","value": 85},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1971e1c9d4400004c640e"},"name":"Ishmael Wade","grade": 6,"scores":[{"subject":"Math","value": 50},{"subject":"English","value": 90},{"subject":"Science","value": 95},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc197461c9d4400004c640f"},"name":"Aanya Legge","grade": 8,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 75},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 75}]},
    {"_id":{"$oid":"5dc197651c9d4400004c6410"},"name":"Elsie-Rose Ramirez","grade": 7,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 95},{"subject":"Science","value": 100},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1979b1c9d4400004c6411"},"name":"Reanne Simons","grade": 6,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 75},{"subject":"Science","value": 60},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc198051c9d4400004c6412"},"name":"Amelia-Rose Mullins","grade": 7,"scores":[{"subject":"Math","value": 60},{"subject":"English","value": 90},{"subject":"Science","value": 90},{"subject":"Social Studies","value": 85}]},
    {"_id":{"$oid":"5dc198291c9d4400004c6413"},"name":"Shae Paterson","grade": 8,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1984a1c9d4400004c6414"},"name":"Kailan Quintero","grade": 6,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 80},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc198871c9d4400004c6415"},"name":"Rahim Williams","grade": 7,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 90},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 70}]},
    {"_id":{"$oid":"5dc199101c9d4400004c6416"},"name":"Davey Barrow","grade": 8,"scores":[{"subject":"Math","value": 50},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc199561c9d4400004c6417"},"name":"Rosa Cervantes","grade": 6,"scores":[{"subject":"Math","value": 70},{"subject":"English","value": 80},{"subject":"Science","value": 90},{"subject":"Social Studies","value": 100}]},
    {"_id":{"$oid":"5dc199731c9d4400004c6418"},"name":"Aneeka Leal","grade": 7,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 70},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc199991c9d4400004c6419"},"name":"Helin Holder","grade": 8,"scores":[{"subject":"Math","value": 80},{"subject":"English","value": 75},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc199ba1c9d4400004c641a"},"name":"Zayn Bains","grade": 6,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 95},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 85}]},
    {"_id":{"$oid":"5dc199d71c9d4400004c641b"},"name":"Monty Bevan","grade": 7,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 55},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc199f61c9d4400004c641c"},"name":"Mia Hanson","grade": 8,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 75},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc19a281c9d4400004c641d"},"name":"Ewan Rosario","grade": 6,"scores":[{"subject":"Math","value": 60},{"subject":"English","value": 90},{"subject":"Science","value": 55},{"subject":"Social Studies","value": 90}]},
    {"_id":{"$oid":"5dc19a531c9d4400004c641e"},"name":"Gino Dickerson","grade": 7,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]},
  ]

  groupByGrade= (arr) =>{
      let A=[];
      let B=[];
      let C=[];
      let D=[];
      let F=[];
      for(let i =0; i<arr.length;++i){
        let scores= arr[i].scores;
        let avg =0;
        for(let j =0; j<scores.length;++j){
            score= scores[j].value;
            avg += score;
        }
        avg= avg/scores.length;
        if (100>=avg&&avg>=92){
            A.push(arr[i]);
        }
        else if (92>avg&&avg>=82){
            B.push(arr[i])
        }
        else if (82>avg&&avg>=72){
            C.push(arr[i])
        }
        else if (72>avg&&avg>=62){
            D.push(arr[i])
        }
        else{
            F.push(arr[i])
        }
      }
      return [A,B,C,D,F]
  }

  findLowestAverages= (arr) =>{
      lowest6= {};
      low6avg= 100;
      lowest7= {};
      low7avg= 100;
      lowest8= {};
      low8avg= 100;
      for (var i=0;i<arr.length;++i){
          let scores= arr[i].scores;
          let avg =0;
          for(let j =0; j<scores.length;++j){
            score= scores[j].value;
            avg += score;
          }
          avg= avg/ scores.length
          if(arr[i].grade===6&&low6avg>avg){
            low6avg= avg;
            lowest6= arr[i];
            lowest6.avg= avg;
          }
          else if(arr[i].grade===7&&low7avg>avg){
            low7avg= avg;
            lowest7= arr[i];
            lowest7.avg= avg;
          }
          else if(arr[i].grade===8&&low8avg>avg){
            low8avg= avg;
            lowest8= arr[i];
            lowest8.avg= avg;
          }
      }
      return [lowest6,lowest7,lowest8];
  }

  displayGrades= ()=>{
    let group= groupByGrade(students);
    let lowest= findLowestAverages(students);
    
    for(let i=0; i<group.length;++i){
      let letterGrade= String.fromCharCode(65+i);
      if(i==4){
        letterGrade= String.fromCharCode(70);
      }
      console.log(letterGrade);
      console.log("---");
      let student= group[i];
      for(let j=0;j<student.length;++j){
        console.log("Name:"+student[j].name+" || Grade:"+ student[j].grade);
      }
    }
    console.log("--------------------------",'\n')
    console.log("Lowest Averages");
    for(let i=0; i<lowest.length;++i){
      console.log("Name:"+lowest[i].name+" || Grade:"+ lowest[i].grade+" || Average:"+ lowest[i].avg);
    }
  }

  displayGrades();