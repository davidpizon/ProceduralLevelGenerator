﻿using System;
using System.Linq;
using System.Threading.Tasks;
using MapGeneration.Core.ChainDecompositions;
using MapGeneration.Core.LayoutEvolvers.SimulatedAnnealing;
using MapGeneration.Core.LayoutGenerators.DungeonGenerator;
using SandboxEvolutionRunner.Evolution;
using SandboxEvolutionRunner.Utils;

namespace SandboxEvolutionRunner.Scenarios
{
    public class OldAndNewScenario : Scenario
    {
        private DungeonGeneratorConfiguration<int> GetChainsAndMaxIterationsAndTreesConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 100,
                HandleTreesGreedily = true,
            });

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetChainsAndMaxIterationsConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 100,
            });

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetChainsConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetBasicConfiguration(namedMapDescription);

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetOldConfiguration(NamedMapDescription namedMapDescription)
        {
            var chainDecompositionOld = new BreadthFirstChainDecompositionOld<int>();
            var chainDecomposition = new TwoStageChainDecomposition<int>(namedMapDescription.MapDescription, chainDecompositionOld);

            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.Chains = chainDecomposition.GetChains(namedMapDescription.MapDescription.GetGraph());
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 10000,
            });

            return configuration;
        }

        protected override void Run()
        {
            var mapDescriptions = GetMapDescriptions();

            if (Options.AsyncBenchmark)
            {
                var tasks = new Task[]
                {
                    RunBenchmarkAsync(mapDescriptions, GetChainsAndMaxIterationsAndTreesConfiguration, Options.FinalEvaluationIterations, "ChainsAndMaxIterationAndTrees"),
                    RunBenchmarkAsync(mapDescriptions, GetChainsAndMaxIterationsConfiguration, Options.FinalEvaluationIterations, "ChainsAndMaxIteration"),
                    RunBenchmarkAsync(mapDescriptions, GetChainsConfiguration, Options.FinalEvaluationIterations, "Chains"),
                    RunBenchmarkAsync(mapDescriptions, GetOldConfiguration, Options.FinalEvaluationIterations, "Old"),
                };

                Task.WaitAll(tasks);
            }
            else
            {
                RunBenchmark(mapDescriptions, GetChainsAndMaxIterationsAndTreesConfiguration, Options.FinalEvaluationIterations, "ChainsAndMaxIterationAndTrees");
                RunBenchmark(mapDescriptions, GetChainsAndMaxIterationsConfiguration, Options.FinalEvaluationIterations, "ChainsAndMaxIteration");
                RunBenchmark(mapDescriptions, GetChainsConfiguration, Options.FinalEvaluationIterations, "Chains");
                RunBenchmark(mapDescriptions, GetOldConfiguration, Options.FinalEvaluationIterations, "Old");
            }
        }
    }
}