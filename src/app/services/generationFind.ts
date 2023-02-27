export function generationFind(num:number):number{
    if(num <= 151){
      return 1
    }else if(num <= 251){
      return 2
    }else if(num <= 386){
      return 3
    }else if(num <= 493){
      return 4
    }else if(num <= 649){
      return 5
    }else if(num <= 721){
      return 6
    }else if(num <= 809){
      return 7
    }else if(num <= 905){
      return 8
    }else{
      return 9
    }
  }