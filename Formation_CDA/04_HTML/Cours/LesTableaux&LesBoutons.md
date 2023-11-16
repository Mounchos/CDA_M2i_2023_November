# Les tableaux et les boutons en HTML

## Les tableaux

Pour construire un tableau, il me faut avant tout une balise `<table></table>` à l'intérieur de cette balise, je spécifie le nombre de lignes qui comporte mon tableau à l'aide de `<tr></tr>`

```html
<table>
    <tr></tr>
    <tr></tr>
    <tr></tr>
</table>
```

A l'intérieur de ces lignes, je peux placer des en-têtes (headers) avec `<th></th>` ou des données simples avec `<td></td>`

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

Pour le référencement et pour un code plus solide ete lisible je précie grâce aux balises   
`<thead></thead>`  
`<tbody></tbody>`   
et `<tfoot></tfoot>` l'organisation de mon tableau.

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>

        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
</tbody>
</table>
```

On peut rajouter un titre à son tableau grâce à la balise `<caption></caption>`
Au niveau des attributs, on peut rajotuer des attributs de style de note tableau, mais on évitera de le faire si on utilise du CSS:  

`border= taille_en_px` = La taille en pixels des bordures.  
`width= taille_en_px` = La longueur en pixels de notre tableau.  
`height= taille_en_px` = La largeur en pixels de notre tableau.  
`align= left, right ou center` = L'alignement vertical des données.

Si on veut que l'une de nos données prenne plus d'une ligne ou colonne, on lui appliquera l'attribut `rowspan="nombre"`

## Les boutons

Pour créer un bouton en HTML, j'utiliserai une balise `<button></button>`
Il est cependant intéressant de spécifier le type de bouton, grâce à l'attribut `type`:
- `<button type="button">`: Il s'agit d'un bouton classique. C'est le choix par défaut si le type n'est pas spécifié.
- `<button type="submit">`: Utile uniquement au sein d'un formulaire, il envoie le formulaire.
- `<button type="reset">`: Utile également au sein d'un formulaire, il réinitialise les champs de ce formulaire.

Si on veut désactiver un bouton, on lui met l'attribut `disabled`