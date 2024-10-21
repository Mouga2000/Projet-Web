import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const Diagramme = () => {
  const data1 = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 50 },
    { x: 'Apr', y: 40 },
    { x: 'May', y: 70 },
    { x: 'juin', y: 70 }
  ];

  const data2 = [
    { x: 'Janvier', y: 45000 },
    { x: 'Frévrier', y: 10000 },
    { x: 'Mars', y: 8000 },
    { x: 'Avril', y: 60000 },
    { x: 'Mai', y: 0 },
    { x: 'Juin', y: 0 },
    { x: 'Juillet', y: 0 },
    { x: 'Aout', y: 0 },
    { x: 'Septembre', y: 0 },
    { x: 'Octobre', y: 0 },
    { x: 'Novembre', y: 0 },
    { x: 'Decembre', y: 0 },

  ];

  return (
    <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',width:'700px', height:'400px',
        textAlign: 'center', display: 'flex',  gap: '10px', flexWrap: 'wrap', paddingTop:'5px', background:'#ffffff' }} >

            
        
            <VictoryChart theme={VictoryTheme.material}
                width={700}
                height={420}
            >
                <VictoryAxis label="Date" 
                style={{
                axisLabel: { padding: 20, fontFamily:'times new roman', fontSize:'11px'},
                ticks: { stroke: '#000' },
                tickLabels: { fontSize: 7 },
                
                }}
                />
                <VictoryAxis dependentAxis label="Quantité" domain={[0,100000]}
                tickValues={[0,10000,20000,30000,40000,50000,60000,70000,80000,900000,100000]} 
                style={{
                axisLabel: { padding: 40 , fontFamily:'times new roman', fontSize:'11px'},
                ticks: { stroke: '#000' },
                tickLabels: { fontSize: 7 },
                }}
                />
                {/* <VictoryLine data={data1} style={{ data: { stroke: '#c43a31' } }} /> */}
                <VictoryLine data={data2} style={{ data: { stroke: '#0000ff', strokeWidth: 1 } }} />
            </VictoryChart>
        
    
    </div>
  );
};

export default Diagramme;