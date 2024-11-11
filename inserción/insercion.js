const insertar_arreglo = (arr) => {
    const I = arr.length;
    let j, temporal;
    const output = document.getElementById('output');
    output.innerHTML = ''; 

    function mostrarPasada(i) {
        if (i >= I) {
            output.innerHTML += `<p><strong>Resultado Final:</strong> [${arr.join(', ')}]</p>`;
            return;
        }

        j = i;
        temporal = arr[i];

        while (j > 0 && arr[j - 1] > temporal) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temporal;

        
        output.innerHTML += `<p>Pasada ${i}: [${arr.join(', ')}]</p>`;

        setTimeout(() => mostrarPasada(i + 1), 750); // 500 ms de retraso entre cada pasada
    }

    mostrarPasada(1);
};

function ejecutarAlgoritmo() {
    const input = document.getElementById('numeros').value;
    const arr = input.split(',').map(Number); 
    if (arr.some(isNaN)) {
        alert("Por favor, ingresa solo números separados por comas.");
        return;
    }
    insertar_arreglo(arr);
}
