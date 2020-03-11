/*http://www.c420.com.br*/
    var bonecoC = 0;
    var bonecoR = 0;
    var aguardar = 0;
    var movimentos = 0;
    function move(direcao){
      if(aguardar == 0){
        aguardar = 1; 
        var c=0;
        var r=0;
        var xc=0;
        var xr=0;
        var pc=-1;
        var pr=-1;
        var src0 = "";
        var src1 = "";
        var src2 = "";
        var qtCaixasFora = 0;
        switch(direcao){
				    case "esquerda":
				        xc=-1;
				        xr=0;
				        break;
				    case "acima":
				        xc=0;
				        xr=-1;
				        break;
				    case "direita":
				        xc=+1;
				        xr=0;
				        break;
				    case "abaixo":
				        xc=0;
				        xr=+1;
				        break;
				}
        while(r!=pr){
          try{
            while(c!=pc){
              try{
                src0 = document.getElementById("wgr"+r+"c"+c).src;
                if(src0.indexOf("caixa_.gif")>-1 ){
                  qtCaixasFora++;
                }
                if(src0.indexOf("boneki.gif")>-1 || src0.indexOf("bonekb.gif")>-1 ){
                  bonecoC = c;
                  bonecoR = r; 
                 }
              }catch(e){
                pc=c+1;
                if(c<1)pr=r+1;
              }
              c++;
            }
            c=0;
          }catch(e){
            pr=r+1;  
          }
          r++;
        }
        if(qtCaixasFora>0){
          src0 = document.getElementById("wgr"+(bonecoR)+"c"+(bonecoC)).src;
          src1 = document.getElementById("wgr"+(bonecoR+(xr))+"c"+(bonecoC+(xc))).src;
          try{
             src2 = document.getElementById("wgr"+(bonecoR+(xr*2))+"c"+(bonecoC+(xc*2))).src;
          }catch(e){
             src2 = "";				  
			  	}
          if(src1.indexOf("branco.gif")>-1 || src1.indexOf("base__.gif")>-1){
            var tsrc0 = src0;
            var tsrc1 = src1;
              if(tsrc0.indexOf("bonekb.gif")>-1 && tsrc1.indexOf("branco.gif")>-1){
  						   src0 = "boneki.gif";
  						   src1 = "base__.gif";
  					}
  					if(tsrc0.indexOf("boneki.gif")>-1 && tsrc1.indexOf("base__.gif")>-1){
  						   src0 = "bonekb.gif";
  						   src1 = "branco.gif";
  					} 
            document.getElementById("wgr"+bonecoR+"c"+bonecoC).src = src1;
            document.getElementById("wgr"+(bonecoR+(xr))+"c"+(bonecoC+(xc))).src = src0;
            movimentos++;
          }else{
            if((src1.indexOf("caixa_.gif")>-1 || src1.indexOf("caixab.gif")>-1) &&
               (src2.indexOf("branco.gif")>-1 || src2.indexOf("base__.gif")>-1)){
              var tsrc0 = src0;
              var tsrc1 = src1;
              var tsrc2 = src2;
              
              if(tsrc0.indexOf("boneki.gif")>-1 &&
  				       tsrc1.indexOf("caixab.gif")>-1 &&
  						   tsrc2.indexOf("branco.gif")>-1 ){
                     src0 = "bonekb.gif";
                     src1 = "caixa_.gif";
  		  	    }
              if(tsrc0.indexOf("bonekb.gif")>-1 &&
  				       tsrc1.indexOf("caixa_.gif")>-1 &&
  						   tsrc2.indexOf("branco.gif")>-1 ){
                     src0 = "boneki.gif";
                     src2 = "base__.gif";
  				    }
              if(tsrc0.indexOf("bonekb.gif")>-1 &&
  				       tsrc1.indexOf("caixab.gif")>-1 &&
  						   tsrc2.indexOf("branco.gif")>-1 ){
                     src1 = "caixa_.gif";
                     src2 = "base__.gif";
  				    }

              if(tsrc0.indexOf("bonekb.gif")>-1 &&
  				       tsrc1.indexOf("caixa_.gif")>-1 &&
  						   tsrc2.indexOf("base__.gif")>-1 ){
                     src0 = "boneki.gif";
                     src1 = "caixab.gif";
  				    }
              if(tsrc0.indexOf("boneki.gif")>-1 &&
  				       tsrc1.indexOf("caixa_.gif")>-1 &&
  						   tsrc2.indexOf("base__.gif")>-1 ){
                     src1 = "caixab.gif";
                     src2 = "branco.gif";
  				    }
              if(tsrc0.indexOf("boneki.gif")>-1 &&
  				       tsrc1.indexOf("caixab.gif")>-1 &&
  						   tsrc2.indexOf("base__.gif")>-1 ){
                     src0 = "bonekb.gif";
                     src2 = "branco.gif";
  				    }
              document.getElementById("wgr"+bonecoR+"c"+bonecoC).src = src2;
              document.getElementById("wgr"+(bonecoR+(xr))+"c"+(bonecoC+(xc))).src = src0;
              document.getElementById("wgr"+(bonecoR+(xr*2))+"c"+(bonecoC+(xc*2))).src = src1;
              movimentos++;
            }
          }
        }else{
				  alert("Ganhou com "+movimentos+ " movimentos.")
				}
        aguardar=0;
      }  
    }
    function keypressed(evt) {
			var evt  = (evt) ? evt : ((event) ? event : null);
			if(evt.keyCode == 37)move("esquerda");      
      if(evt.keyCode == 38)move("acima");
      if(evt.keyCode == 39)move("direita");
      if(evt.keyCode == 40)move("abaixo");
      document.getElementById("rep").innerHTML = movimentos+" movimentos ";
	
	}
	document.onkeyup=keypressed;
	/*http://www.c420.com.br*/
