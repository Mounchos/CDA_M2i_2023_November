<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SINON" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#taille" algoitem="taille EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#poids" algoitem="poids EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#taille_poids" algoitem="taille_poids EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez votre taille#0" algoitem="AFFICHER &quot;Entrez votre taille&quot;"/>
        <item code="2#taille#pasliste" algoitem="LIRE taille"/>
        <item code="4#Entrez votre poids#0" algoitem="AFFICHER &quot;Entrez votre poids&quot;"/>
        <item code="2#poids#pasliste" algoitem="LIRE poids"/>
        <item code="6#poids >= 43 ET poids &lt;= 65 ET taille >= 145 ET taille &lt;= 169" algoitem="SI (poids >= 43 ET poids &lt;= 65 ET taille >= 145 ET taille &lt;= 169) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Vous êtes de catégorie 1#0" algoitem="AFFICHER &quot;Vous êtes de catégorie 1&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#poids >= 43 ET poids &lt;= 53 et taille >= 172 ET taille &lt;= 183" algoitem="SI (poids >= 43 ET poids &lt;= 53 et taille >= 172 ET taille &lt;= 183) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Vous ne faîtes partie d'aucune catégorie#0" algoitem="AFFICHER &quot;Vous ne faîtes partie d'aucune catégorie&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#poids >= 66 ET poids &lt;= 77 et taille >= 145 ET taille &lt;= 160" algoitem="SI (poids >= 66 ET poids &lt;= 77 et taille >= 145 ET taille &lt;= 160) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Vous ne faîtes partie d'aucune catégorie#0" algoitem="AFFICHER &quot;Vous ne faîtes partie d'aucune catégorie&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="6#poids >= 43 ET poids &lt;= 77 et taille >= 160 ET taille &lt;= 178" algoitem="SI (poids >= 43 ET poids &lt;= 77 et taille >= 160 ET taille &lt;= 178) ALORS">
                                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                    <item code="4#Vous faîtes partie de la catégorie 2#0" algoitem="AFFICHER &quot;Vous faîtes partie de la catégorie 2&quot;"/>
                                    <item code="8#finsi" algoitem="FIN_SI"/>
                                </item>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
