// let wordsArr = word.split(" ");


const latin = (word)=>{
  if(word.charAt(0)==="a"||
  word.charAt(0)==="y"||
  word.charAt(0)==="e"||
  word.charAt(0)==="i"||
  word.charAt(0)==="o"||
  word.charAt(0)==="u"
  )

  {
    var latinWord = word.concat("ay");
    return latinWord;
  }
  else if(word.charAt(0)==="q" && word.charAt(1)==="u"){
    let splitted = word.slice(2);
    let concatennated = splitted.concat(word[0]).concat(word[1]);

    return latin(concatennated);


  }
  else{
    let splitted = word.slice(1);
    let concatennated = splitted.concat(word[0]);

    return latin(concatennated);
  }

}

$('#button').click(function(e){
  e.preventDefault();
  let word = $("#words").val();
  


  const latin = (word)=>{
    if(word.charAt(0)==="a"||
    word.charAt(0)==="e"||
    word.charAt(0)==="i"||
    word.charAt(0)==="o"||
    word.charAt(0)==="u"||
    word.charAt(0)==="y")
  
    {
      var latinWord = word.concat("ay");
      return latinWord;
    }
    else{
      let splitted = word.slice(1);
      let concatennated = splitted.concat(word[0]);
  
      return latin(concatennated);
    }
  
  }

  $("#output").text(latin(word));
  

});
