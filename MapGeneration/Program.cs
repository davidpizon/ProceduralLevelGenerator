﻿namespace MapGeneration
{
	using System;
	using System.Collections.Generic;
	using Benchmarks;
	using Core;
	using Core.ConfigurationSpaces;
	using Core.Doors;
	using Core.GraphDecomposition;
	using Core.Interfaces;
	using GeneralAlgorithms.Algorithms.Common;
	using GeneralAlgorithms.Algorithms.Graphs.GraphDecomposition;
	using GeneralAlgorithms.Algorithms.Polygons;
	using Utils;

	internal class Program
	{
		private static void Main(string[] args)
		{
			var benchmark = new Benchmark();

			/*{
				var mapDescription = MapDescriptionsDatabase.Reference_17Vertices_WithoutRoomShapes;
				MapDescriptionsDatabase.AddClassicRoomShapes(mapDescription);

				var configurationSpacesGenerator = new ConfigurationSpacesGenerator(new PolygonOverlap(), DoorHandler.DefaultHandler,
					new OrthogonalLineIntersection(), new GridPolygonUtils());

				var configurationSpaces = configurationSpacesGenerator.Generate(mapDescription);
				var layoutGenerator = new SALayoutGenerator<int>();
				layoutGenerator.InjectRandomGenerator(new Random(0));

				benchmark.Execute(layoutGenerator, "Basic generator");
			}*/

			{
				var layoutGenerator = new SALayoutGenerator<int>();
				layoutGenerator.InjectRandomGenerator(new Random(0));

				var scenarios = new BenchmarkScenarios<SALayoutGenerator<int>, int>();

				scenarios.AddScenario(new List<Tuple<string, Action<SALayoutGenerator<int>>>>()
				{
					new Tuple<string, Action<SALayoutGenerator<int>>>("Handmade decomposition", (generator) => { generator.SetChainDecomposition(new DummyChainsDecomposition()); }),
					/*new Tuple<string, Action<SALayoutGenerator<int>>>("Basic", (generator) => { generator.SetChainDecomposition(new BasicChainsDecomposition<int>(new GraphDecomposer<int>())); }),
					new Tuple<string, Action<SALayoutGenerator<int>>>("Longer chains", (generator) => { generator.SetChainDecomposition(new LongerChainsDecomposition<int>(new GraphDecomposer<int>()));}),*/
					// new Tuple<string, Action<SALayoutGenerator<int>>>("Breadth first", (generator) => { generator.SetChainDecomposition(new BreadthFirstLongerChainsDecomposition<int>()); }),
				});

				scenarios.AddScenario(new List<Tuple<string, Action<SALayoutGenerator<int>>>>()
				{
					new Tuple<string, Action<SALayoutGenerator<int>>>("Lazy", (generator) => { generator.EnableLazyProcessing(true); }),
					new Tuple<string, Action<SALayoutGenerator<int>>>("Not lazy", (generator) => { generator.EnableLazyProcessing(false); }),
				});

				/*scenarios.AddScenario(new List<Tuple<string, Action<SALayoutGenerator<int>>>>()
				{
					// new Tuple<string, Action<SALayoutGenerator<int>>>("Perturb pos", (generator) => { generator.EnablePerturbPositionAfterShape(true); }),
					new Tuple<string, Action<SALayoutGenerator<int>>>("No perturb", (generator) => { generator.EnablePerturbPositionAfterShape(false); }),
				});*/

				scenarios.AddScenario(new List<Tuple<string, Action<SALayoutGenerator<int>>>>()
				{
					new Tuple<string, Action<SALayoutGenerator<int>>>("Run 1", (generator) => {  }),
					// new Tuple<string, Action<SALayoutGenerator<int>>>("Run 2", (generator) => {  }),
				});

				benchmark.Execute(layoutGenerator, scenarios, 15);
			}
		}
	}
}
