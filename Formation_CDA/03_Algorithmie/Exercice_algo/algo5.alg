<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SINON" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" epaisseurLigne="2" totalBoucles="5000000" epaisseurPoint="2" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#AGE" algoitem="AGE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez l'âge de l'enfant#0" algoitem="AFFICHER &quot;Entrez l'âge de l'enfant&quot;"/>
        <item code="2#AGE#pasliste" algoitem="LIRE AGE"/>
        <item code="6#AGE &lt; 3 OU AGE >= 18" algoitem="SI (AGE &lt; 3 OU AGE >= 18) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Vous ne pouvez pas inscrire votre enfant.#0" algoitem="AFFICHER &quot;Vous ne pouvez pas inscrire votre enfant.&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#AGE >= 3 ET &lt;= 8" algoitem="SI (AGE >= 3 ET &lt;= 8) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Votre catégorie est Baby#0" algoitem="AFFICHER &quot;Votre catégorie est Baby&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#AGE >= 9 ET AGE &lt;= 10" algoitem="SI (AGE >= 9 ET AGE &lt;= 10) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Votre catégorie est Poussin#0" algoitem="AFFICHER &quot;Votre catégorie est Poussin&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="6#AGE >= 11 ET &lt;= 12" algoitem="SI (AGE >= 11 ET &lt;= 12) ALORS">
                                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                    <item code="4#Votre catégorie est Minime#0" algoitem="AFFICHER &quot;Votre catégorie est Minime&quot;"/>
                                    <item code="8#finsi" algoitem="FIN_SI"/>
                                    <item code="9#sinon" algoitem="SINON">
                                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                        <item code="4#Votre catégorie est Cadet#0" algoitem="AFFICHER &quot;Votre catégorie est Cadet&quot;"/>
                                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                                    </item>
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
