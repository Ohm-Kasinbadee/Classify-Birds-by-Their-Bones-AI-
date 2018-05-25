$(function () {
    var result = "hello";
    $("#myForm").on("submit", function () {
        myFunctiontree();
        $("#myModal").modal('show')
        $("#text-result").text(result)
    })

    function myFunctiontree() {
        var test = $("#tarw").val()

        // alert(test)
        // if(huml <= 32.31){
        //  if(tarw <= 2){
        //    if(humw <= 2.54){
        //      if(tarl <= 15.8){
        //        if(huml <= 15.99){
        //         //  SO(2.0)
        //        }
        //        else{
        //         //  P(4.0/1.0)
        //        }
        //      }
        //      else{
        //        if(feml <= 31.17){
        //          if(huml <= 22.35){
        //           //  SO(73.0)
        //          }
        //          else{
        //           if(feml <= 19.56){
        //             if(feml <= 14.07){
        //               // SW(2.0)
        //             }
        //             else{
        //               // W(7.0/1.0)
        //             }
        //           }
        //           else{
        //             if(feml <= 22.08){
        //               if(tibl <= 36.52){
        //                 // SO(8.0)
        //               }
        //               else{
        //                 // SW(3.0/1.0)
        //               }
        //             }
        //             else{
        //               // SO(31.0)
        //             }
        //           }
        //          }
        //        }
        //        else{
        //          if(humw <= 22.08){
        //           // W(2.0/1.0)  
        //          }
        //          else{
        //           //  P(2.0)
        //          }
        //        }
        //      }
        //    }
        //    else{
        //      if(tibw <= 1.94){
        //       // P(13.0)  
        //      }
        //      else{
        //       //  SO(5.0)
        //      }
        //    }
        //  }
        //  else {
        //    if(tarl <= 31.88){
        //     //  T(7.0)
        //    }
        //    else{
        //     //  SW(3.0/1.0)
        //    }
        //  }
        // } else{
        //   if (huml <= 49.12){
        //     if(tarw <= 2.2){
        //       if(ulnal <= 40){
        //         if(feml <= 19.05){
        //           // SW(4.0)
        //         }
        //         else{
        //           // W(14.0/2.0)
        //         }
        //       }
        //       else{
        //         if(humw <= 2.7){
        //           // SW(2.0/1.0)
        //         }
        //         else{
        //           // P(13.0)
        //         }
        //       }
        //     }
        //     else{
        //       if(femw <= 3.78){
        //         if(tarl <= 40.43){
        //           if(femw <= 2.57){
        //             // R(6.0/1.0)
        //           }
        //           else{
        //             if(tarw <= 2.29){
        //               // R(4.0/1.0)
        //             }
        //             else{
        //               if(ulnal <= 52.76){
        //                 // T(9.0)
        //               }
        //               else{
        //                 if(huml <= 46.2){
        //                   // P(2.0)
        //                 }
        //                 else{
        //                   // T(2.0/1.0)
        //                 }
        //               }
        //             }
        //           }
        //         }
        //       }
        //       else{
        //         if(humw <= 5.28){
        //           // P(5.0)
        //         }
        //         else{
        //           // SW(3.0)
        //         }
        //       }
        //     }
        //   }
        //   else{
        //     if(feml <= 52.98){
        //       if(tibw <= 4.36){
        //         if(huml <= 61.6){
        //           if(humw <= 2.54){
        //             if(huml <= 50.96){
        //               // W(2.0)
        //             }
        //             else{
        //               // SW(2.0)
        //             }
        //           }
        //           else{
        //             // R(5.0)
        //           }
        //         }
        //         else{
        //           if(tarl <= 53.83){
        //             if(feml <= 33.01){
        //               if(tibl <= 48.82){
        //                 // W(2.0)
        //               }
        //               else{
        //                 // SW(23.01/1.0)
        //               }
        //             }
        //             else{
        //               if(tarw <= 2.72){
        //                 // W(12.0/1.0)
        //               }
        //               else{
        //                 if(feml <= 45.08){
        //                   // SW(21.0)
        //                 }
        //                 else{
        //                   if(femw <= 3.9){
        //                     // W(3.9)
        //                   }
        //                   else{
        //                     // SW(4.0/1.00)
        //                   }
        //                 }
        //               }
        //             }
        //           }
        //           else{
        //             // W(8.0)
        //           }
        //         }
        //       }
        //       else{
        //         // SW(28.0)
        //       }
        //     }
        //     else{
        //       if(huml <= 145){
        //         if(humw <= 10.37){
        //           if(femw <= 5.45){
        //             if(huml <= 100.69){
        //               if(femw <= 4.16){
        //                 // W(3.0)
        //               }
        //              else{
        //               //  R(13.0)
        //              }
        //               }
        //             else{
        //               if(huml <= 118.2){
        //                 // SW(2.0)
        //               }
        //               else{
        //                 // W(7.0)
        //               }
        //             }
        //           }
        //           else{
        //             if(feml <= 64.8){
        //               // SW(2.0/1.0)
        //             }
        //             else{
        //               // R(24.0/1.0)
        //             }
        //           }
        //         }
        //         else{
        //           if(feml <= 91.6){
        //             // SW(3.0)
        //           }
        //           else{
        //             // T(2.0)
        //           }
        //         }
        //       }
        //       else{
        //         if(tarl <= 134){
        //           // SW(17.0/1.0)
        //         }
        //         else{
        //           // W(2.0)
        //         }
        //       }
        //     }
        //   }
        // }
    }
})