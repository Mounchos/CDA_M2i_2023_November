<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; années pour atteindre une population de 120 000 habitants.&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="année EST_DU_TYPE NOMBRE" code="1#NOMBRE#année"/>
        <item algoitem="populationActuelle EST_DU_TYPE NOMBRE" code="1#NOMBRE#populationActuelle"/>
        <item algoitem="populationCiblée EST_DU_TYPE NOMBRE" code="1#NOMBRE#populationCiblée"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="populationActuelle PREND_LA_VALEUR 96809" code="5#populationActuelle#96809#pasliste"/>
        <item algoitem="populationCiblée PREND_LA_VALEUR 120000" code="5#populationCiblée#120000#pasliste"/>
        <item algoitem="année PREND_LA_VALEUR 0" code="5#année#0#pasliste"/>
        <item algoitem="TANT_QUE (populationActuelle &lt; populationCiblée) FAIRE" code="15#populationActuelle &lt; populationCiblée">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="populationActuelle PREND_LA_VALEUR populationActuelle * (1 + (0.0089))" code="5#populationActuelle#populationActuelle * (1 + (0.0089))#pasliste"/>
            <item algoitem="année PREND_LA_VALEUR année + 1" code="5#année#année + 1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Il faudra &quot;" code="4#Il faudra #0"/>
        <item algoitem="AFFICHER année" code="3#année#0#pasliste"/>
        <item algoitem="AFFICHER &quot; années pour atteindre une population de 120 000 habitants.&quot;" code="4# années pour atteindre une population de 120 000 habitants.#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
