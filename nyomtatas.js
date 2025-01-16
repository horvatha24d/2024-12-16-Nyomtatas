function kalkulal() {
    
    const  szelesseg = parseFloat(document.getElementById('v').value);
    const magassag = parseFloat(document.getElementById('magassag').value); 
    const papir = parseFloat(document.getElementById('papirtipus').value);


    let terulet = Math.round((szelesseg * magassag) / 10000); 
    let koltseg = terulet * papir; 

    // Display results in the frame
    document.getElementById('terulet').innerText = terulet ; 
    document.getElementById('papir').innerText = papir  ; 
    document.getElementById('koltseg').innerText = koltseg ;
    document.getElementById('kalkulalGomb').addEventListener('click', kalkulal);
    document.getElementById('valasz').style.visibility = "visible"; 
}
