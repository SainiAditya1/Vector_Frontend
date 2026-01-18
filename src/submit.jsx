// src/submit.js

import { useState } from 'react';
import { useStore } from './store';
import { useShallow } from 'zustand/react/shallow';
import { Modal } from './components/Modal'; 

export const SubmitButton = () => {
    const { nodes, edges } = useStore(
        useShallow((state) => ({
            nodes: state.nodes,
            edges: state.edges,
        }))
    );

    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [pipelineResult, setPipelineResult] = useState(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
            
            const response = await fetch(`${backendUrl}/pipelines/parse`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

          
            setPipelineResult(data);
            setModalOpen(true);

        } catch (error) {
            console.error("Error submitting pipeline:", error);

            alert("Failed to submit pipeline. Is the backend running?");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center p-4">
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`
                        font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-200 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        ${isLoading 
                            ? 'bg-blue-400 cursor-not-allowed text-white' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}
                    `}
                >
                    {isLoading ? 'Submitting...' : 'Submit Pipeline'}
                </button>
            </div>

        
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Pipeline Analysis"
            >
                {pipelineResult && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
                            <span className="font-medium text-gray-700">Number of Nodes</span>
                            <span className="text-blue-600 font-bold text-lg">{pipelineResult.num_nodes}</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
                            <span className="font-medium text-gray-700">Number of Edges</span>
                            <span className="text-blue-600 font-bold text-lg">{pipelineResult.num_edges}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
                            <span className="font-medium text-gray-700">Is Valid DAG?</span>
                            <span className={`font-bold ${pipelineResult.is_dag ? 'text-green-600' : 'text-red-600'}`}>
                                {pipelineResult.is_dag ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}