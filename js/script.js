$(function () {
    var result = "ERROR";
    $("#myForm").on("submit", function () {
        myFunctiontree();
        $("#myModal").modal('show')
        $("#text-result").text(result)
    })

    function myFunctiontree() {
        var huml = $("#huml").val()
        var humw = $("#humw").val()
        var ulnal = $("#ulnal").val()
        var ulnaw = $("#ulnaw").val()
        var feml = $("#feml").val()
        var femw = $("#femw").val()
        var tibl = $("#tibl").val()
        var tibw = $("#tibw").val()
        var tarl = $("#tarl").val()
        var tarw = $("#tarw").val()

        // alert(test)
        if(huml <= 32.31){
         if(tarw <= 2){
           if(humw <= 2.54){
             if(tarl <= 15.8){
               if(huml <= 15.99){
                result = "Singing Birds"
                //  SO(2.0)
               }
               else{
                result = "Scansorial Birds"
                //  P(4.0/1.0)
               }
             }
             else{
               if(feml <= 31.17){
                 if(huml <= 22.35){
                    result = "Singing Birds"
                  //  SO(73.0)
                 }
                 else{
                  if(feml <= 19.56){
                    if(feml <= 14.07){
                      result = "Swimming Birds"
                      // SW(2.0)
                    }
                    else{
                      result = "Wading Birds"
                      // W(7.0/1.0)
                    }
                  }
                  else{
                    if(feml <= 22.08){
                      if(tibl <= 36.52){
                        result = "Singing Birds"
                        // SO(8.0)
                      }
                      else{
                        result = "Swimming Birds"
                        // SW(3.0/1.0)
                      }
                    }
                    else{
                        result = "Singing Birds"
                      // SO(31.0)
                    }
                  }
                 }
               }
               else{
                 if(humw <= 22.08){
                  result = "Wading Birds"
                  // W(2.0/1.0)  
                 }
                 else{
                  result = "Scansorial Birds"
                  //  P(2.0)
                 }
               }
             }
           }
           else{
             if(tibw <= 1.94){
              result = "Scansorial Birds"
              // P(13.0)  
             }
             else{
                result = "Singing Birds"
              //  SO(5.0)
             }
           }
         }
         else {
           if(tarl <= 31.88){
            result = "Terrestrial Birds"
            //  T(7.0)
           }
           else{
            result = "Swimming Birds"
            //  SW(3.0/1.0)
           }
         }
        } else{
          if (huml <= 49.12){
            if(tarw <= 2.2){
              if(ulnal <= 40){
                if(feml <= 19.05){
                  result = "Swimming Birds"
                  // SW(4.0)
                }
                else{
                  result = "Wading Birds"
                  // W(14.0/2.0)
                }
              }
              else{
                if(humw <= 2.7){
                  result = "Swimming Birds"
                  // SW(2.0/1.0)
                }
                else{
                  result = "Scansorial Birds"
                  // P(13.0)
                }
              }
            }
            else{
              if(femw <= 3.78){
                if(tarl <= 40.43){
                  if(femw <= 2.57){
                    result = "Raptors"
                    // R(6.0/1.0)
                  }
                  else{
                    if(tarw <= 2.29){
                      result = "Raptors"
                      // R(4.0/1.0)
                    }
                    else{
                      if(ulnal <= 52.76){
                        result = "Terrestrial Birds"
                        // T(9.0)
                      }
                      else{
                        if(huml <= 46.2){
                          result = "Scansorial Birds"
                          // P(2.0)
                        }
                        else{
                          result = "Terrestrial Birds"
                          // T(2.0/1.0)
                        }
                      }
                    }
                  }
                }
              }
              else{
                if(humw <= 5.28){
                  result = "Scansorial Birds"
                  // P(5.0)
                }
                else{
                  result = "Swimming Birds"
                  // SW(3.0)
                }
              }
            }
          }
          else{
            if(feml <= 52.98){
              if(tibw <= 4.36){
                if(huml <= 61.6){
                  if(humw <= 2.54){
                    if(huml <= 50.96){
                      result = "Wading Birds"
                      // W(2.0)
                    }
                    else{
                      result = "Swimming Birds"
                      // SW(2.0)
                    }
                  }
                  else{
                    result = "Raptors"
                    // R(5.0)
                  }
                }
                else{
                  if(tarl <= 53.83){
                    if(feml <= 33.01){
                      if(tibl <= 48.82){
                        result = "Wading Birds"
                        // W(2.0)
                      }
                      else{
                        result = "Swimming Birds"
                        // SW(23.01/1.0)
                      }
                    }
                    else{
                      if(tarw <= 2.72){
                        result = "Wading Birds"
                        // W(12.0/1.0)
                      }
                      else{
                        result = "Swimming Birds"
                        if(feml <= 45.08){
                          // SW(21.0)
                        }
                        else{
                          if(femw <= 3.9){
                            result = "Wading Birds"
                            // W(3.9)
                          }
                          else{
                            result = "Swimming Birds"
                            // SW(4.0/1.00)
                          }
                        }
                      }
                    }
                  }
                  else{
                    result = "Wading Birds"
                    // W(8.0)
                  }
                }
              }
              else{
                result = "Swimming Birds"
                // SW(28.0)
              }
            }
            else{
              if(huml <= 145){
                if(humw <= 10.37){
                  if(femw <= 5.45){
                    if(huml <= 100.69){
                      if(femw <= 4.16){
                        result = "Wading Birds"
                        // W(3.0)
                      }
                     else{
                      result = "Raptors"
                      //  R(13.0)
                     }
                      }
                    else{
                      if(huml <= 118.2){
                        result = "Swimming Birds"
                        // SW(2.0)
                      }
                      else{
                        result = "Wading Birds"
                        // W(7.0)
                      }
                    }
                  }
                  else{
                    if(feml <= 64.8){
                      result = "Swimming Birds"
                      // SW(2.0/1.0)
                    }
                    else{
                      result = "Raptors"
                      // R(24.0/1.0)
                    }
                  }
                }
                else{
                  if(feml <= 91.6){
                    result = "Swimming Birds"
                    // SW(3.0)
                  }
                  else{
                    result = "Terrestrial Birds"
                    // T(2.0)
                  }
                }
              }
              else{
                if(tarl <= 134){
                  result = "Swimming Birds"
                  // SW(17.0/1.0)
                }
                else{
                  result = "Wading Birds"
                  // W(2.0)
                }
              }
            }
          }
        }
    }
})