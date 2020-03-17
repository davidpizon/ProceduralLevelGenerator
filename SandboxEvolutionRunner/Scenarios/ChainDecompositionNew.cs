﻿using System;
using System.Linq;
using MapGeneration.Core.ChainDecompositions;
using MapGeneration.Core.LayoutEvolvers.SimulatedAnnealing;
using MapGeneration.Core.LayoutGenerators.DungeonGenerator;
using SandboxEvolutionRunner.Evolution;
using SandboxEvolutionRunner.Utils;

namespace SandboxEvolutionRunner.Scenarios
{
    public class ChainDecompositionNew : Scenario
    {
        private DungeonGeneratorConfiguration<int> GetOriginalConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 100,
            });

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> PreferLargeCycles(NamedMapDescription namedMapDescription)
        {
            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 100,
            });
            configuration.ChainDecompositionConfiguration = new ChainDecompositionConfiguration()
            {
                PreferSmallCycles = false,
            };

            return configuration;
        }


        protected override void Run()
        {
            var mapDescriptions = GetMapDescriptions();

            RunBenchmark(mapDescriptions, PreferLargeCycles, Options.FinalEvaluationIterations, "PreferLargeCycles");
            RunBenchmark(mapDescriptions, GetOriginalConfiguration, Options.FinalEvaluationIterations, "Original");
        }
    }
}