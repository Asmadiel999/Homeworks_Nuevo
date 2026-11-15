import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { GraphService, LinkData, NodeData } from '../graph.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph-view',
  imports: [],
  template:`<svg #svg width="600" height="400" style="border: 1px solid #ccc"></svg>`,
  styleUrl: './graph-view.css',
})
export class GraphView {
  private graph = inject(GraphService);
  private svgRef = viewChild<ElementRef<SVGSVGElement>>('svg');
  private simulation?: d3.Simulation<NodeData, undefined>; 

  constructor(){
    effect(() =>{
        this.graph.changes();
        const svgE1 = this.svgRef();
        if (svgE1) this.draw(svgE1.nativeElement);
      }
    )
  }

  private draw(svgE1: SVGSVGElement){
    const width = 600;
    const height = 400;
    const {nodes, links} = this.graph.getGraphData();

    this.simulation?.stop();
    const svg = d3.select(svgE1);
    svg.selectAll('*').remove();

    const link = svg.append('g')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke', '#999');

    const node = svg.append('g')
    .selectAll('text')
    .data(nodes)
    .join('circle')
    .attr('r', d=> (d.type === 'city' ? 16:9))
    .attr('fill', d=>(d.type=== 'city' ? '#e4572e' : '#4a90d9'));

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text(d => d.label)
      .attr('font-size', 12)
      .attr('dx', 14)
      .attr('dy', 4);

    this.simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink<NodeData, LinkData>(links).distance(80))
    .force('charge', d3.forceManyBody().strength(-250))
    .force('center', d3.forceCenter(width/2, height/2))
    .on('tick', ()=>{
      link
        .attr('x1', d => d.source.x!)
        .attr('y1', d => d.source.y!)
        .attr('x2', d => d.target.x!)
        .attr('y2', d => d.target.y!);

      node.attr('cx', d=>d.x!).attr('cy', d=>d.y!)
      label.attr('x', d=>d.x!).attr('y', d=>d.y!)
      
    });


  }

}


