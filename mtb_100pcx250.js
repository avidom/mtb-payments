(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2000,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBBIAAgSIAQgPQAOgMAKgLQAHgJAFgGQAEgHABgJQAAgHgFgFQgGgGgIAAQgJAAgHADQgIADgEAEIgJgVQAIgGALgEQAKgDANAAQAOAAAJAEQALAGAFAJQAFAKAAALQAAALgEAJQgFAIgIAJQgIAJgJAIIgLAKIAAAAIAwAAIAAAZg");
	this.shape.setTransform(79.4,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBAIA0hmIAAAAIg5AAIAAgZIBZAAIAAATIgzBsg");
	this.shape_1.setTransform(68.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAJIAAgRIAzAAIAAARg");
	this.shape_2.setTransform(60,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGBAIAAgeIg4AAIAAgUIAyhNIAjAAIAABJIAQAAIAAAYIgQAAIAAAegAAAgcIgDAMIgSAaIAbAAIAAgaIABgMIAAgMIAAAAIgHAMg");
	this.shape_3.setTransform(51.4,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBCIgGAAIAAgXIAGAAIAIAAIANgDQAHgCAEgDQAFgFAFgGQAEgGABgIIAAAAQgEAFgHACQgGADgHgBQgLABgJgFQgJgFgGgJQgFgIgBgMQABgNAGgLQAGgKALgGQALgHANABQAQgBALAIQALAHAFAOQAGAMAAAQQAAARgHAQQgFAOgLAKQgKAJgMAEQgKAFgPAAIgJAAgAgMglQgFAGAAALQAAAFACAFQACAFAEACQAEADAFAAQAFAAAFgCQAEgDACgDIABgDIAAgFQAAgHgBgGQgCgGgEgFQgEgEgGAAQgHABgFAGg");
	this.shape_4.setTransform(40.5,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAJIAAgRIAzAAIAAARg");
	this.shape_5.setTransform(31.9,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbA9QgKgFgFgJQgGgHAAgKQAAgLAHgJQAGgHALgDIAAAAQgKgGgEgHQgFgIAAgIQAAgLAGgJQAGgHAKgFQALgFALABQAPAAAJAEQAKAFAEAIQAFAIgBAIQABAIgFAIQgFAHgJAFIAAABQAGACAGACQAFAFADAGQADAHABAIQAAAMgHAJQgGAJgLAFQgLAEgOAAQgQABgLgGgAgMAQQgEAFgBAGQABAFACAEQACAEAEADQAEADAEgBQAIAAAFgEQAFgEgBgIQABgIgGgFQgGgFgHgDQgIADgDAFgAgLgpQgDAFAAAGQAAAGAEAFQAGAEAGACQAFgBAEgEQAEgFAAgGQAAgEgCgDQgBgFgEgCQgDgCgFAAQgHAAgEAEg");
	this.shape_6.setTransform(23.4,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBAQgLgDgFgEIAGgWQAEACAIACQAJAEAJAAQAKAAAGgGQAGgEAAgIQgBgGgDgEQgDgEgHgDQgEgBgGAAIgNAAIAAgUIAMAAQAGAAAFgCQADgBAEgDQADgEAAgFQAAgGgEgEQgGgDgHgBQgIABgIACIgLAFIgHgWQAHgDAKgDQALgDANAAQAMgBAKAFQAJAEAFAHQAFAIAAAJQAAAKgGAIQgGAHgMAFIAAABQAIAAAHADQAGAEAEAHQADAGAAAJQAAALgGAJQgGAKgNAFQgLAEgPAAQgMAAgKgCg");
	this.shape_7.setTransform(12.3,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA/QgKgCgGgDIAGgXIAMAFQAIABAKABQAFAAAEgCQAHgDADgDQAEgFAAgHQAAgKgIgFQgHgHgTAAIgKABIgIAAIAJhBIBFAAIAAAZIgwAAIgDAUIAEgBIAFAAQAHAAAJACQAJACAGAGQAIAFAEAFQAFAJgBALQAAAMgGALQgHAKgNAGQgMAHgQgBQgMAAgIgCg");
	this.shape_8.setTransform(1.5,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBRQAKgPAIgTQAEgVABgaQgBgagEgTQgIgUgKgPIANAAQAFAIAGAMQAGALAEAPQADAQAAASQAAATgDAPQgEAPgGAMQgGAMgFAIg");
	this.shape_9.setTransform(-11.1,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAMBAIAAgjIg6AAIAAgLIA4hRIATAAIAABPIASAAIAAANIgSAAIAAAjgAAHgkIgGAJIgdAqIAAABIAoAAIAAgqIABgUIgBAAIgFAKg");
	this.shape_10.setTransform(-18.5,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANBAIAAgjIg7AAIAAgLIA4hRIATAAIAABPIASAAIAAANIgSAAIAAAjgAAHgkIgGAJIgdAqIAAABIApAAIAAgqIAAgUIAAAAIgGAKg");
	this.shape_11.setTransform(-28.6,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAFBRQgFgIgFgMQgGgLgDgQQgEgPgBgTQABgSAEgPQADgPAGgMQAFgMAFgIIAPAAQgMAPgGAUQgGAUAAAZQAAAaAGAVQAGATAMAPg");
	this.shape_12.setTransform(-35.8,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA/QgIgCgFgDIAFgOQAEADAHACQAHACAJABQAHgBAHgDQAHgDAEgHQAEgGAAgIQAAgNgJgJQgJgFgRAAIgKAAIgIABIAIg+IA8AAIAAAOIgvAAIgFAhIAEAAIAGAAIANABQAHACAGAEQAIAEAFAGQAGAJAAANQAAAMgGAKQgGAKgLAGQgLAGgMgBQgLAAgJgCg");
	this.shape_13.setTransform(-48.4,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghBAIA3hxIAAAAIg+AAIAAgOIBRAAIAAALIg3B0g");
	this.shape_14.setTransform(-58,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBAQgJgDgFgDIAEgNQAFACAIADQAHADAKAAQAIAAAHgFQAGgDAEgHQACgFAAgGQgBgJgEgGQgFgGgIgCQgFgCgJgBIgKAAIAAgLIAKAAQAHAAAFgCQAGgCAFgFQAEgFAAgIQAAgFgCgFQgDgEgFgDQgFgDgFAAQgJAAgHADIgLAGIgEgMQAFgFAJgCQAJgDALAAQAKgBAJAFQAIAFAEAGQAEAHAAAIQAAAKgGAIQgGAJgMAEIAAAAQAIACAGACQAHAEAEAHQAEAHAAAJQAAALgGAJQgEAJgLAFQgLAGgNgBQgLAAgJgCg");
	this.shape_15.setTransform(-68.4,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFA1IAAgwIgtAAIAAgKIAtAAIAAgvIALAAIAAAvIAtAAIAAAKIgtAAIAAAwg");
	this.shape_16.setTransform(-79.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-14.4,174.1,28.8);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgFQAAgGADgDQADgEAEAAQAFAAADAEQADADAAAGQAAAFgDAEQgDADgFAAQgEAAgDgDgAgHgZQgDgDAAgGQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAGgDADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(52.3,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmAwIgCguIgBgPIAAgSIgBAAIgDAJIgDAKIgFAMIgTAvIgKAAIgSgvIgDgJIgDgMIgDgKIgBAAIAAASIgBAPIgDAuIgQAAIAHhfIAWAAIASAvIACAJIADAJIACAJIAAAAIACgKIAFgMIAEgKIAQgqIAVAAIAHBfg");
	this.shape_1.setTransform(43.9,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAuQgGgEgEgGQgDgGAAgIQAAgRAPgIQAPgIAagBIAAgCQABgEgCgFQgBgFgFgEQgFgEgIAAQgHAAgGACQgHACgFADIgEgMQAGgDAIgCQAJgDAHAAQAOABAJAFQAHAGADAJQADAJAAAKIAAAiIABAMIABALIgPAAIgCgMIgBAAQgEAFgIAFQgHAEgJAAQgJAAgHgEgAAAAAQgHACgGAFQgGAEAAAJQAAAJAEAEQAGAEAGAAQAIAAAFgFQAHgFABgGIABgDIAAgCIAAgQIgTAAg");
	this.shape_2.setTransform(32.6,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAwIAAgsIgsAAIAAAsIgSAAIAAhfIASAAIAAAnIAsAAIAAgnIARAAIAABfg");
	this.shape_3.setTransform(22.8,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAsQgLgGgFgLQgGgLAAgPQAAgNAFgLQAGgMAKgHQAKgHAMAAQAMAAAIAFQAIAEAEAHQAFAHABAIQACAIAAAGIAAAEIAAADIhCAAQAAALAFAIQAEAHAHAEQAIADAHAAQAJAAAGgBIAMgEIADANIgNAEQgIACgMAAQgNAAgKgGgAAZgIQAAgGgCgGQgCgHgFgFQgFgEgKAAQgHAAgGAEQgFAFgDAGQgDAHgBAGIAxAAIAAAAg");
	this.shape_4.setTransform(8.5,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAwIAAhRIgfAAIAAgOIBNAAIAAAOIgeAAIAABRg");
	this.shape_5.setTransform(-0.4,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAwIAAgpIAAgMIAAgMIABgOIgBAAIgIAQIgHAPIgNAWIgQAaIgUAAIAAhfIARAAIAAApIAAAMIAAAMIgBANIABAAIAEgLIAGgJIAFgKIAcgwIAVAAIAABfg");
	this.shape_6.setTransform(-9.8,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWAwIAAgsIgsAAIAAAsIgRAAIAAhfIARAAIAAAnIAsAAIAAgnIASAAIAABfg");
	this.shape_7.setTransform(-20.6,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgGgLQgHgLAAgQQABgOAGgLQAGgLALgHQALgGALAAQAOAAALAGQAKAHAGALQAGALAAAOQAAARgHALQgHALgLAGQgLAFgLAAQgNAAgKgGgAgPgeQgHAFgDAJQgDAJAAAHQAAAKAEAJQAEAIAGAFQAHAFAHAAQAIAAAHgFQAGgFAEgIQAEgIAAgLQAAgHgDgJQgDgIgGgGQgHgGgKABQgIgBgHAGg");
	this.shape_8.setTransform(-31.4,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAxIgQgBIgMAAIAAheIAOgBIARgBIAMABQAHABAHACQAHACAEAFQAEAFAAAIQAAAJgGAGQgFAFgJACIAAAAQALACAHAEQAGAGABAKQgBAKgFAGQgFAFgIADQgIADgIABIgJABIgFAAgAgVAkIAHABIAHAAQAGAAAFgBQAHgCAFgDQAEgEABgHQAAgHgFgEQgEgDgHgCIgNgBIgNAAgAgVgjIAAAdIANAAQAHAAAEgCQAGgBAEgEQAEgDAAgGQAAgHgHgDQgGgEgLAAIgIAAIgGABg");
	this.shape_9.setTransform(-41.4,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYBDQgIgCgIgEIAEgOIAOAGQAIACAIAAQAOAAAHgHQAJgIAAgLQgBgJgFgHQgGgFgIgDQgGgCgJAAIgIAAIAAgLIAIAAQAJAAAFgDQAHgEAFgFQADgGAAgHQABgKgHgGQgHgFgIAAQgJAAgHADIgNAGIgFgNQAIgFAJgCQAIgDALAAQAKAAAIAEQAJAEAGAHQAEAHAAALQABAIgEAHQgDAHgHAFQgGAEgIACQAJACAIABQAHAFAEAHQAFAHAAAKQAAAOgIAJQgGAIgMAEQgLAEgKAAQgKAAgJgCg");
	this.shape_10.setTransform(-51.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-14,116.7,28.1);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("Ak2DPIHgjOIAAgBIngjOIAAiJIJtEdIAAB1IptEeg");
	this.shape.setTransform(70.5,0,0.17,0.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#083F67").s().p("AjXFSIAAqjIGhAAIAAB+IkHAAIAACMID4AAIAAB7Ij4AAIAAChIEUAAIAAB9g");
	this.shape_1.setTransform(52.5,0,0.17,0.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#083F67").s().p("AmHFSIAAqjICXAAIAAImICnAAIAAomICTAAIAAImICoAAIAAomICWAAIAAKjg");
	this.shape_2.setTransform(40,0,0.17,0.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#083F67").s().p("Aj7FMIAAqhICZAAIAADrQA2gEAcAAQBzAABJA1QBQA5AABrQAABbg3A6QgtAthSAWQhEAShXAAQhiABhEgKgAhjAJIAADWQAXAEAiAAQA5AAAkgcQAogeAAg2QAAg3gngdQgjgag5AAQgUAAgnAEg");
	this.shape_3.setTransform(27.3,0,0.17,0.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#083F67").s().p("AkjDbQAxgGAdgeQAcgdAMg/QAKg1AAhTIAAkpIHHAAIAAKjIiZAAIAAolIiYAAIAACgQAACPgYBSQgdBjhHAqQg8AhhLAAg");
	this.shape_4.setTransform(15.7,0.1,0.17,0.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#083F67").s().p("AjwD5QhUhgAAiUQAAiZBahjQBchlCSAAQCWAABYBlQBTBfAACSQAACkhcBgQhbBfiUAAQiTAAhXhkgAh3ihQgsA/ABBjQgBBlAtA+QAtBABJAAQBMAAAthCQAqg/AAhjQAAhggqg/QgthDhMAAQhLAAgsBBg");
	this.shape_5.setTransform(5,0,0.17,0.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#083F67").s().p("Aj7FMIAAqhIHBAAIAAB9IkoAAIAAB1QAngFAsgBQAzAAAwAOQA0AOAlAcQBPA2AABpQAABfhAA6QguAphOAUQhBARhVAAQhgABhFgKgAhjALIAADUQAXAEAkAAQAdAAAYgJQAagJATgRQAhgeAAgwQAAgxgkgcQgngeg9AAQgcAAgaAEg");
	this.shape_6.setTransform(-6,0,0.17,0.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#083F67").s().p("Aj7FMIAAqhICZAAIAADrQA0gEAeAAQBzAABJA1QBQA5AABrQAABag3A7QgtAthSAWQhFAShWAAQhiABhEgKgAhjAJIAADWQAWAEAjAAQA5AAAkgcQAogeAAg2QAAg3gngdQgjgag5AAQgVAAgmAEg");
	this.shape_7.setTransform(-19.7,0,0.17,0.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#083F67").s().p("AhNFSIAAoiIi2AAIAAiBIIHAAIAACBIi5AAIAAIig");
	this.shape_8.setTransform(-29.8,0,0.17,0.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#083F67").s().p("ACQFSIg1itIjAAAIgwCtIieAAIDOqjIDHAAIDSKjgAgWidQgKArgGAWIgoCOICTAAIgqiOQgLglgVheIgCAAIgPBCg");
	this.shape_9.setTransform(-39,0,0.17,0.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#083F67").s().p("AB+FSIAAkbIj6AAIAAEbIiaAAIAAqjICaAAIAAEEID6AAIAAkEICZAAIAAKjg");
	this.shape_10.setTransform(-50.5,0,0.17,0.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#083F67").s().p("AiQFSQg3gNgpgXIAgh1QAcAOAqAMQAzAOArgBQA5AAAggWQAigYAAgqQAAgzgvgWQghgRg8AAIhAAAIAAhvIA/AAQA2AAAfgXQAjgXAAgnQAAgigbgUQgbgVgvAAQhEABhQAoIgkhuQBag2B4AAQBrAABBAyQA/AvgBBNQABA9gnArQgkAog9APIAAADQBDAIAsAoQAwAsgBBCQABBohcA2QhNAthtAAQg2AAg1gLg");
	this.shape_11.setTransform(-61,0,0.17,0.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#083F67").s().p("AjZFMIALh6QAUAFAeAAQAhAAAagUQAWgRAKgaQAEgIgBgIQAAgGgFgJIjknQICtAAIBiDvIAuB/IADAAQAUhIARg6IBJjsIChAAIh/FJQgmBggZA1QgkBNgiArQhFBYhtABQgtAAgegMg");
	this.shape_12.setTransform(-70.8,0.1,0.17,0.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#083F67").s().p("Eg/BAVZQkWAAj/hsQj1hni/i+Qi9i+hoj2Qhsj+AAkWQAAkUBskAQBoj1C9i+QC/i9D1hoQD/htEWAAMB+DAAAQEWAAD/BtQD1BoC/C9QC9C+BoD1QBsD/AAEVQAAEWhsD+QhoD2i9C+Qi/C+j1BnQj/BskWAAgEhGTgRQQjYBbimCnQimClhbDYQhfDfAADyQAADzBfDfQBbDYCmClQCmCnDYBbQDeBfD0AAMB+DAAAQD0AADehfQDYhbCminQCmilBbjYQBfjfAAjzQAAjyhfjfQhbjYimilQiminjYhbQjehej0AAMh+DAAAQj0AAjeBeg");
	this.shape_13.setTransform(0,0,0.17,0.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Eg/BAUFQkEAAjvhmQjmhhiyizQiziyhijmQhljvAAkEQAAkDBljuQBijmCzizQCyiyDmhiQDvhlEEgBMB+DAAAQEEABDvBlQDmBiCyCyQCyCzBjDmQBlDuAAEDQAAEEhlDvQhjDmiyCyQiyCzjmBhQjvBmkEAAg");
	this.shape_14.setTransform(0,0,0.17,0.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-23.3,183.8,46.6);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFA000").s().p("Ak2E3QiCiBAAi2QAAi1CCiBQCBiCC1ABQC2gBCBCCQCCCBAAC1QAAC2iCCBQiBCBi2ABQi1gBiBiBgAkTkTQhzByAAChQAACiBzByQByBzChAAQChAABzhzQBzhyAAiiQAAihhzhyQhzh0ihAAQihAAhyB0g");
	this.shape.setTransform(0,0,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE32A").s().p("AklEmQh6h6AAisQAAirB6h6QB6h6CrAAQCsAAB6B6QB6B6AACrQAACsh6B6Qh6B6isAAQirAAh6h6g");
	this.shape_1.setTransform(0,0,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA000").s().p("AmGGGQiiihAAjlQAAjjCiijQCjiiDjAAQDlAACiCiQCiCjAADjQAADkiiCiQiiCjjlAAQjjAAijijgAljljQiUCUABDPQgBDQCUCUQCUCUDPAAQDQAACUiUQCUiUAAjQQAAjPiUiUQiUiTjQAAQjPAAiUCTg");
	this.shape_2.setTransform(0,0,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE32A").s().p("Al1F1QiaiagBjbQABjaCaibQCciaDZAAQDbAACaCaQCcCbAADaQAADbicCaQiaCcjbgBQjZABicicg");
	this.shape_3.setTransform(0,0,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFA000").s().p("AmSGTQininAAjsQAAjqCninQCnioDrAAQDrAACnCoQCoCnAADqQAADsioCnQinCnjrAAQjrAAiningAlvluQiZCZAADVQAADXCZCZQCZCZDWAAQDXAACYiZQCZiZAAjXQAAjViZiZQiYiZjXAAQjWAAiZCZg");
	this.shape_4.setTransform(0,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDE32A").s().p("AmAGBQigigAAjhQAAjgCgigQCfigDhAAQDiAACgCgQCfCgAADgQAADhifCgQigCgjiAAQjgAAigigg");
	this.shape_5.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-22.8,45.6,45.6);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFA000").s().p("Ag0ELQhBgbg1gvQhnhcgWh3QgWh5BHhQQAfgkAtgSQAtgTA1AAQBAAAA+AaQBAAbA2AvQAxAsAgA2QAgA2ALA3QAMA8gNA1QgMA1gjAnQgfAjguATQgtATg1AAQg/AAg+gagAiXjnQgkAPgZAbQg7BCAWBnQAVBkBYBOQAwArA4AXQA2AXA3AAQAsAAAkgPQAkgOAZgcQAcggAJgqQAKgrgJgxQgKgwgdgwQgcgvgsgmQgvgrg4gXQg3gYg3ABQgrgBgkAQg");
	this.shape.setTransform(1.5,-1.5,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE32A").s().p("AA0ENQhwgIhghVQhfhVgWhuQgWhwBBhJQBBhJByAJQBvAIBgBVQBgBVAWBuQAVBwhBBJQg6BBhgAAIgYgBg");
	this.shape_1.setTransform(1.6,-1.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA000").s().p("AhBFNQhQghhEg8Qg9g2gphEQgohEgOhGQgOhKAPhCQAQhCArgxQAngsA4gXQA4gXBCAAQBPAABPAhQBQAhBEA8QA9A3ApBDQAoBEAOBGQAPBLgQBBQgPBCgsAxQgnArg4AYQg4AXhCAAQhPAAhPghgAjDksQgwATggAlQgkApgNA3QgNA3ANBAQANA/AkA9QAlA9A4AyQA9A3BIAdQBHAeBHAAQA4AAAvgTQAwgTAgglQAkgpANg3QANg4gNg/QgNg/gkg9Qglg9g4gyQg9g3hIgdQhHgehHAAQg4AAgvATg");
	this.shape_2.setTransform(1,-1.2,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE32A").s().p("ABCFWQiOgLh6hsQh5hsgciMQgbiOBShdQBThcCQALQCOALB6BsQB5BsAcCMQAbCOhSBcQhKBTh8AAIgdgBg");
	this.shape_3.setTransform(1,-1.2,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFA000").s().p("AhlFtQhPgfhBg6QhAg4gnhJQgohIgKhNQgLhQAVhIQAUhJAyg4QAwg2BEgdQBDgdBPAAQBPAABPAfQBOAfBCA6QA/A5AoBIQAoBJAKBMQALBQgVBJQgUBIgyA4QgwA3hEAcQhEAdhOAAQhQAAhOgfgAi3lEQg7AZgqAvQgrAwgSA/QgSA/AKBGQAKBFAjBBQAkBBA6AzQA7A1BGAcQBHAcBHAAQBEAAA7gZQA7gZAqgvQArgxASg/QASg/gKhFQgKhFgjhBQgkhCg6gzQg7g0hHgcQhGgchHAAQhEAAg7AZg");
	this.shape_4.setTransform(0,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDE32A").s().p("AAyF2QiagEh+hvQh9hvgViaQgViaBghsQBfhrCdADQCaADB9BvQB+BwAVCYQAVCbhgBrQheBqiXAAIgHAAg");
	this.shape_5.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-15.9,32.3,31.8);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFA000").s().p("Ak1FdQg3gxgahHQgahIAGhUQAHhRAkhRQAkhRA+hFQBNhXBjgwQBhgxBiAAQB7AABWBLQBvBkgLCtQgMCriACRQhNBWhjAxQhhAwhiAAQh9AAhUhLgAhJlJQhZAshGBOQg4BAgiBJQghBIgFBLQgGBIAWA9QAWA9AuApQBHA/BpAAQBYAABXgtQBZgsBGhOQBziBANiXQAMiZhghWQhIg/hoAAQhYAAhXAtg");
	this.shape.setTransform(-2.2,-2.2,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE32A").s().p("AklFLQhpheANiiQAMihB6iJQB6iJCegfQCggfBpBdQBoBdgMCiQgMChh6CJQh6CJieAfQgpAIglAAQhtAAhOhFg");
	this.shape_1.setTransform(-2.2,-2.2,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA000").s().p("AkPH8QhCgYg0guQiMh8APjaQAPjXChi1QBhhsB8g+QB7g9B7AAQBMAABCAYQBDAYAzAuQBFA9AhBZQAgBZgIBqQgIBmguBmQgtBmhOBXQhgBth8A9Qh7A9h7AAQhMAAhDgYgAhhmpQhyA5haBlQiUCmgQDCQgQDFB9BvQBcBSCIAAQBxAABwg5QBzg5BZhkQBIhRArhgQAqhcAIhfQAHhegchPQgdhPg7g1QhchRiIgBQhxAAhxA5g");
	this.shape_2.setTransform(-1.6,-1.5,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE32A").s().p("Al1GkQiEh2APjPQAQjNCbiuQCbiuDKgnQDLgoCEB2QCFB2gQDPQgPDNibCuQibCujJAnQgzAKgvAAQiLAAhkhYg");
	this.shape_3.setTransform(-1.7,-1.5,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFA000").s().p("Aj9IbQhSgehBg6QhOhFgphjQgphhAChyQAChvAshsQArhtBRhaQBehqB8g6QB7g6CAAAQBdAABRAeQBSAeBBA6QChCPgDDrQgEDoimC7QheBqh8A6Qh7A6iAAAQhdAAhRgegAiWnRQhyA2hXBiQhKBTgpBlQgpBkgCBlQgCBnAlBZQAkBYBHA+QA6A0BKAbQBJAbBTAAQB1AAByg2QByg2BXhiQCZisAFjUQAEjViSiCQh3hqipAAQh1AAhyA2g");
	this.shape_4.setTransform(0,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDE32A").s().p("AmAGxQiaiJAEjgQAEjeCgizQCgi0DbgeQDegeCaCJQCaCJgEDgQgEDeigCzQigC0jbAeQgoAFgmAAQisAAh+hwg");
	this.shape_5.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.8,44.8,45.6);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFOB3QiDhIiYglQiXgjiiAAQg0gBg6AEIgcADIgJhqIAdgCQBBgFA1AAQCvAACjApQCmApCPBMIAYANIgyBeg");
	this.shape.setTransform(8.9,-29.2,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#083F67").s().p("AH1RCQhbAAhCg/QhCg+gGhbQj7Awj6gnQgJBXhBA8QhCA8hZAAIixAAQhfAAhDhDQhDhDAAhfIAAj8QjHiihbjZIgMAAQhfAAhDhEQhEhDAAhfIAAiuQAAhfBEhDQBDhEBfAAIAMAAQBbjZDHiiIAAjGQAAgWALgSQALgSATgLQBLgnBPAAQA9AAA4AVQA5AWAtApQDVhFDqAAQGMAAFAC/QFAC9B4ExQAVgmAAgsQAAgJgDgVQgEgYAKgVQALgVAUgMIgDgRIAMALQARgFANgBQAhAAAXAYQAtAvAZA8QAYA6AABBQAABfgzBQQgyBQhWAqQgKCnhNCcQhOCciJB/IAAEnQAABfhEBDQhDBDhfAAgAF6NdQAAAyAkAlQAkAkAzAAICxAAQAzAAAlgkQAkglAAgyIAAlXIAKgIQCOh7BLibQBMiaAAikIAAgDIAAgFIAAgWIAVgFQBIgVAvg7QAug9AAhLQAAgqgQgoQgMA/gmAzQgnAzg6AfIggARIgJgkQhHk8k0jNQk1jNmSAAQjyAAjZBPIgTAHIgNgQQgggpgugWQgugWgzAAQgtAAgsAUIAADoIgLAIQhuBThOBoQhNBngoB0IgGATIhWAAQgzAAgkAlQgkAkAAAzIAACuQAAA0AkAkQAkAkAzAAIBWAAIAGATQAoB0BNBoQBOBnBuBTIALAIIAAEwQAAAyAkAlQAkAkAzAAICxAAQAzAAAlgkQAkglAAgyIAAhrIAiAIQCQAgCZAAQCxAACogsIAkgJg");
	this.shape_1.setTransform(0,0,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#083F67").s().p("AH1QlQhTAAg7g6Qg7g7AAhTIAAgVQiXAgiYAAQiAAAh+gWIAAALQAABTg7A7Qg6A6hUAAIixAAQhTAAg7g6Qg7g7AAhTIAAkKQhnhRhMhlQhMhjgshwIgfAAQhTgBg7g7Qg7g7AAhTIAAiuQAAhTA7g7QA7g8BTAAIAfAAQBYjiDTinIAAjUQAAgNAHgMQAHgLAMgIQBEgjBJgBQA8AAA3AYQA2AWArAqQDahIDsAAQGVAAFBDIQE/DIBmE7QAcgcAPglQAPglAAgnQAAgNgDgVQgDgQAIgOQAHgPAOgHQAKgFAMAAQAWAAAOAPQApArAWA2QAWA2AAA7QAABcgzBLQgzBMhUAjQgFCphOCeQhOCeiOB/IAAE0QAABTg7A7Qg6A6hUAAgAFdNdQAAA/AtAsQAsAtA/AAICxAAQA/AAAtgtQAsgsAAg/IAAlKQCQh8BPidQBRiiAAiuIgBgIQBSgXAzhCQA1hEAAhWQAAgygTguQgTgtgigjQAFAZAAARQAABHgmA9QglA6g+AgQhIlBk6jUQk9jXmfAAQj2AAjfBRQgjgsgzgZQg0gag7AAQg9AAg5AeIAADrQhwBWhPBpQhRBsgpB5IhCAAQg/AAgsAtQgtArAABAIAACuQAAA/AtAtQAsAsA/AAIBCAAQApB5BRBsQBPBpBwBWIAAEhQAAA/AtAsQAsAtA/AAICxAAQA/AAAsgtQAtgsAAg/IAAhIQCVAhCaABQCzAACtgtg");
	this.shape_2.setTransform(0,0,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28B8EF").s().p("AH1QNQhJAAg0gzQgzg1AAhIIAAg0QigAmioAAQiOAAiIgbIAAApQAABIg0A1Qg0AzhJAAIixAAQhJAAg0gzQgzg1AAhIIAAkWQhthUhNhnQhOhngrh0IgwAAQhJAAg0g0Qg0gzAAhKIAAiuQAAhKA0gzQA0g0BJAAIAwAAQArhzBOhoQBNhnBthUIAAjgQAAgOANgHQA/giBCAAQA7AAA1AYQA1AYAoArQDdhMDwAAQGZAAE/DPQE/DOBXFBQAtggAZgxQAagwAAg3QAAgPgEgXQgBgIADgHQAEgHAHgDQAGgEAFAAQAKAAAIAIQAmAoAUAxQAVAyAAA2QAABYg0BIQgzBIhTAdQgCCrhOCgQhOCfiRCAIAAE/QAABIg0A1Qg0AzhJAAg");
	this.shape_3.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-43.6,111.8,87.3);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("Eg1dAIbIAAw1MBq7AAAIAAQ1g");
	this.shape.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,-21.5,273.8,43.2);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkNEXQhehrAAinQAAirBkhuQBohyCjAAQCoAABkByQBcBqAACkQAAC2hnBsQhlBrimAAQilAAhihwgAiGi1QgvBIgBBvQAABwAyBFQAyBHBTABQBVAAAyhKQAvhHAAhvQAAhrgvhGQgzhMhVAAQhTAAgzBJg");
	this.shape.setTransform(109.1,0,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACNF7IAAk+IkYAAIAAE+IisAAIAAr0ICsAAIAAEjIEYAAIAAkjICrAAIAAL0g");
	this.shape_1.setTransform(77.4,0,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWF7IAApkIjMAAIAAiQIJFAAIAACQIjPAAIAAJkg");
	this.shape_2.setTransform(49.6,0,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AChF7Ig7jDIjXAAIg2DDIixAAIDnr0IDfAAIDrL0gAgZiwQgLAwgHAZIgtCfICmAAIgwifQgMgngYhrIgCAAIgRBJg");
	this.shape_3.setTransform(25.3,0,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlGD2QA3gHAgghQAggiAOhHQALg7AAhdIAAlMIH9AAIAAL0IirAAIAApnIiqAAIAAC0QAACggbBbQghBvhQAvQhCAlhVAAg");
	this.shape_4.setTransform(-5.4,0.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACGF7IAApoIkLAAIAAJoIisAAIAAr0IJjAAIAAL0g");
	this.shape_5.setTransform(-33.5,0,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjGEaQhlhmAAipQAAi5B5hvQByhoCxAAQA+AAA2ALQAtAJAaANIgjCJQhCgdhOAAQhrAAg/A/QhGBDAAB3QAABzBABCQA/BDByAAQAlAAApgIQAngHAagKIAaCGQgbANgwAJQg3AKhBAAQi8AAhqhsg");
	this.shape_6.setTransform(-61.9,0,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjwF7IAAr0IHSAAIAACMIkmAAIAACeIEVAAIAACJIkVAAIAAC0IE1AAIAACNg");
	this.shape_7.setTransform(-86.9,0,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkZFzIAArwIH2AAIAACLIlLAAIAACDQAtgHAvABQA6gBA2AQQA7APApAgQBYA9AAB2QAABqhIBBQg0AthWAXQhJAThfABQhpAAhQgMgAhvANIAADtQAZAEApAAQAgAAAbgKQAegLAVgTQAlggAAg3QAAg2gpgfQgrgihEAAQgiAAgbAFg");
	this.shape_8.setTransform(-112.4,0.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.7,-15.6,247.4,31.3);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AktAiIAAhDIJbAAIAABDg");
	this.shape.setTransform(125.4,2.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiUDpIAAnRIEfAAIAABWIi0AAIAABiICpAAIAABUIipAAIAABuIC+AAIAABXg");
	this.shape_1.setTransform(97.9,0,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABfDpIAAiKQABh2AHhNIgCAAQghBWguBPIhdCoIh5AAIAAnRIBiAAIAACLQgBB7gFBVIACAAQAphaArhJIBji4IBsAAIAAHRg");
	this.shape_2.setTransform(80.5,0,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABXDpIAAjDIisAAIAADDIhqAAIAAnRIBqAAIAAC0ICsAAIAAi0IBpAAIAAHRg");
	this.shape_3.setTransform(61.4,0,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABjDpIgkh4IiEAAIghB4IhuAAICPnRICJAAICRHRgAgag/IgcBhIBmAAIgdhhIgWhaIgBAAIgWBag");
	this.shape_4.setTransform(42.6,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AisDmIAAnIQAugKBbAAQAvAAAfAGQAhAGAZAPQAZANAPAXQAQAZAAAeQAAAhgTAZQgUAcgmAOIAAABQApALAZAcQAbAfAAArQAAA7gxAoQg1AqiAAAQhEAAgvgHgAhDCeQAKABAfAAQAlAAAYgPQAbgSAAgjQAAgggcgRQgZgQgoAAIgkAAgAhDicIAABtIAjAAQAnAAAWgQQAWgPAAgbQAAgagUgOQgTgOgiAAQgbAAgSADg");
	this.shape_5.setTransform(25.7,0,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABgDpIAAiKQAAh8AHhHIgCAAQgfBRgwBUIhdCoIh5AAIAAnRIBiAAIAACLQAAB+gGBSIADAAQAohYArhLIBii4IBtAAIAAHRg");
	this.shape_6.setTransform(7.4,0,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADCDpQgJgUgKgfIgOg1QgOgrgSgVQgXgbgoAAIgQAAIAADDIhjAAIAAjDIgSAAQgnAAgXAbQgSAVgNArIgPA1QgJAggKATIhqAAQANgdANgqIAXhHQAQgyAYgbQAcgeAsgHIifjRIB7AAIB0DCIAKAAIAAjCIBjAAIAADCIAJAAIB1jCIB7AAIigDRQAsAFAdAeQAYAaARAyIAWBKQAOAsAMAbg");
	this.shape_7.setTransform(-14.3,0,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiWDlIAIhVQAMAEAWAAQAXAAATgOQAPgMAHgSQAEgIgFgNIiek/IB4AAIBDClIAfBXIACAAIBMj8IBvAAIhXDjQgaBAgSAmQgZA0gXAeQgvA+hMAAQgeAAgWgIg");
	this.shape_8.setTransform(-35,0.2,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjICXQAigEATgVQAUgUAJgrQAHglAAg5IAAjMIE4AAIAAHRIhpAAIAAl7IhoAAIAABvQAABigRA4QgTBFgyAdQgpAWg0AAg");
	this.shape_9.setTransform(-53.1,0.1,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah6CtQg+g/ABhnQAAhyBKhEQBGhABtAAQAlAAAiAGQAbAGARAJIgWBUQgogRgxgBQhBAAgmAnQgsApABBJQAABGAnApQAmApBGAAQAzAAAlgQIAQBTQgQAJgeAFQgiAGgoAAQhzAAhChDg");
	this.shape_10.setTransform(-69.8,0,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AitDkIAAnOIE1AAIAABWIjLAAIAABQQAcgDAdAAQBOAAAzAmQA2AlAABIQAABCgsAnQg8A2iAAAQhCAAgwgHgAhEAIIAACSQAPACAaAAQApAAAagYQAWgVABghQAAghgagTQgagVgqAAQgUAAgRADg");
	this.shape_11.setTransform(-85.9,0.1,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AilCsQg6hCAAhnQAAhoA+hEQA/hHBkABQBogBA9BHQA5BBAABlQAABvg/BDQg/BBhlAAQhmAAg8hEgAhShvQgeAsAABEQAABGAfAqQAfArAyAAQA1AAAegtQAdgrAAhEQAAhBgdgsQgfgvg0AAQgzABgfAsg");
	this.shape_12.setTransform(-104.6,0,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABgDpIAAiKQgBh2AIhNIgCAAQgfBRgwBUIhdCoIh4AAIAAnRIBgAAIAACLQABB7gGBVIACAAQAqhaAqhJIBii4IBsAAIAAHRg");
	this.shape_13.setTransform(-129.7,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-9.6,274.9,19.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjLFAIAAp/IGKAAIAAB3Ij4AAIAACFIDpAAIAAB0IjpAAIAACYIEFAAIAAB3g");
	this.shape.setTransform(129.4,-3.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACDFAIAAi9QAAikAKhoIgCAAQgtBzg/BvIiBDnIilAAIAAp/ICFAAIAAC+QAACrgIB2IADAAQAxhvBCh0ICIj8ICVAAIAAJ/g");
	this.shape_1.setTransform(105.6,-3.1,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB3FAIAAkMIjtAAIAAEMIiRAAIAAp/ICRAAIAAD2IDtAAIAAj2ICRAAIAAJ/g");
	this.shape_2.setTransform(79.4,-3.1,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjLFAIAAp/IGKAAIAAB3Ij5AAIAACFIDqAAIAAB0IjqAAIAACYIEGAAIAAB3g");
	this.shape_3.setTransform(56.6,-3.1,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABkFAIAAkIIgDAAQhEAhhKAAQhbAAg0gwQg4gyAAhkIAAjSICQAAIAAC6QABA2AbAbQAcAbAyAAQAwAAAugYIAAkOICRAAIAAJ/g");
	this.shape_4.setTransform(33.6,-3.1,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYD8QhIhMgMh9IhJAAIAAENIiRAAIAAp/ICRAAIAAD6IBNAAQAUh1BKhHQBKhJBvAAQCDAABNBgQBIBaAACLQAACbhRBbQhOBaiDAAQhyAAhLhPgAAEiXQgiA8AABcQAABdAiA8QAmA/BAAAQBBAAAlg/QAkg8AAheQAAhbgjg8QglhAhBAAQhBAAgmBAg");
	this.shape_5.setTransform(4.8,-3.1,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkTDQQAugFAbgdQAbgcAMg8QAJgyAAhPIAAkZIGuAAIAAJ/IiQAAIAAoIIiQAAIAACYQAACHgWBOQgcBehEAoQg4AfhHAAg");
	this.shape_6.setTransform(-27,-2.9,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABfFAQgNgbgOgpIgWhIQgTg/gZgcQgeglg2AAIgcAAIAAEMIiPAAIAAp/ICPAAIAAEKIANAAICvkKICwAAIjgEdQA7AOAkAoQAeAjAWBAIAiBmQAVA7ATAog");
	this.shape_7.setTransform(-49.2,-3.1,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADCGSIgHijIl1AAIgICjIhuAAIgGkRIA1gEQAphJAUhEQAahcAAh5IAAisIGiAAIAAIOIA/AEIgGERgAgkjFQAABzgcBeQgSA7gbAyIDTAAIAAmUIiKAAg");
	this.shape_8.setTransform(-75.1,0.2,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjkDsQhPhaAAiOQAAiQBVheQBYhgCJAAQCPAABTBgQBPBaAACLQAACahXBcQhWBaiMAAQiLAAhUhfgAhwiYQgqA8AABeQAABfAqA7QArA8BGAAQBHAAAqg/QAog7ABheQgBhbgog7QgrhAhHAAQhHAAgpA+g");
	this.shape_9.setTransform(-100.7,-3.1,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABxFAIAAoIIjhAAIAAIIIiSAAIAAp/IIFAAIAAJ/g");
	this.shape_10.setTransform(-127.3,-3.1,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.6,-16.3,275.3,32.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("AkMG2IForAIAAgCImRAAIAAipIJqAAIAACBIloLqg");
	this.shape.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-8.7,12.4,17.6);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("AmCLXIKF3MICAAeIqFXNg");
	this.shape.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-15.1,15.5,30.4);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("AAsG2IAAjRImDAAIAAiGIFMoUID5AAIAAIAIBqAAIAACaIhqAAIAADRgAAFjGIgnBRIh1C+IAAACIDDAAIAAjAQAAhAAHhkIgGAAIgoBTg");
	this.shape.setTransform(7.2,0.1,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60000").s().p("Ak2G+IAAh9IByhmQCciLA5hJQBHhWAChJQgBg5gigiQgmglhGAAQhcAAhgBJIg6iTQA2goBGgYQBPgaBUAAQCQAABTBNQBQBLAAB6QAABmhGBjQg0BMhwBjIhPBEIAAADIFIAAIAACpg");
	this.shape_1.setTransform(-7.9,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-8.9,28.2,17.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArCaKQlGiKj8j7Qj7j8iKlGQiPlSAAlxQAAlwCPlSQCKlGD7j8QD8j7FGiKQFSiPFwAAQFyAAFRCPQFGCKD8D7QD8D8CJFGQCPFSAAFwQAAFxiPFSQiJFGj8D8Qj8D7lGCKQlRCPlyAAQlwAAlSiPg");
	this.shape.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-36.3,72.8,72.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("AkqAGIgSkEIFHEfIEglHIASEGIkhFHg");
	this.shape.setTransform(35.2,-5.9,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60000").s().p("ArZbyQlfiSkRkQQkQkQiRlgQiSlfAAmBQAAmACSlfQCRlfEQkRQERkQFfiSQFfiRGAAAQGBAAFfCRQFgCSEQEQQDmDmCOEmQCOEnAlFBIjTAYQggkeh+kGQh/kFjMjNQjzjyk5iCQk4iBlXAAQlVAAk5CBQk4CCjyDyQjzDyiCE5QiBE5AAFVQAAFXCBE4QCCE5DzDyQDyDyE4CCQE5CBFVAAIAADUQmAAAlfiRg");
	this.shape_1.setTransform(-0.7,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-38.4,80.6,77);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("AgXGxIAAthIAvAAIAANhg");
	this.shape.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-19.4,2.2,39);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("AAAAkIgBABIgvB9IhGgrIBXhlIAAgBIiAAXIAAhRIB+AaIABgBIhWhnIBIgpIAuB8IAAAAIAuh8IBHAoIhXBoIAAACICCgbIAABRIiCgXIgBADIBYBjIhIArg");
	this.shape.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.3,14.5,14.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("AAAAkIgBABIgvB9IhGgrIBXhlIAAgBIiAAXIAAhRIB+AaIABgBIhWhnIBIgpIAuB8IAAAAIAuh8IBHAoIhXBoIAAACICCgbIAABRIiCgXIgBADIBYBjIhIArg");
	this.shape.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.3,14.5,14.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("AAAAkIgBABIgvB9IhGgrIBXhlIAAgBIiAAXIAAhRIB+AaIABgBIhWhnIBIgpIAtB8IABAAIAth8IBIAoIhXBoIAAACICBgbIAABRIiBgXIgCADIBZBjIhIArg");
	this.shape.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.3,14.4,14.6);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCBLIgBgCIgDgIIAAgCIACgCIAIgFQACgBADgFQADgGABgFIADgRIAEgsQAAgFADgDQADgCAEAAIA0AAQAEAAACABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIABAGIAABbIgBADIgDAAIgKAAIgCAAIgBgDIAAhWIgnAAIgIA+QgDAKgCAEQgDAGgGAEQgFADgHADIgCAAgAHcBFQgLgGgGgMQgGgNAAgSQAAgMAEgKQAEgMAFgGQAIgHAHgEQAJgDAKAAQAMAAAIADQAJAEAFAFQAFAGADAIQACAHAAAJQAAAHgCADQgDAEgCABIgIABIg6AAQAAAJACAHQADAHAFAEQADADAHADQAGACAGAAIAJgBIAIgCIAHgDIACAAIACABIAEAJIABACQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQgFADgFABIgLADIgLABQgPAAgLgGgAIQAKIgBgKIgFgKQgDgEgFgDQgGgDgIAAQgGAAgGADQgGADgDAEQgDAFgCAFQgCAEAAAGIA4AAgAgQBHQgIgDgFgFQgGgFgCgGQgCgGgBgIIgCgPIABgaQABgKADgNQACgLAFgHQAFgHAHgGQAKgGAIgDIAmgIIABACIACAIIAAADIgDACIgaAFIgOAGQgGADgEAEQgEAEgCAHQgCAGgBAJQAEgDAHgDIAKgDIAKgBQALAAAFADQAHADAFAEQAGAGACAFIAEAMIABAPIgBAOQgBAFgEAJQgDAHgGAFQgHAGgHACQgKAEgKAAQgIAAgKgEgAgCgJQgEAAgHAEIgKAFIgBAYQAAAIABAHQACAHADAEQADAFAGACQAGADAGAAQAGAAAGgDQAGgBADgEQADgEADgFIACgJIACgKIgCgOIgEgKQgCgDgGgFQgFgDgIAAgAi2BFQgKgGgHgMQgGgNAAgSQAAgMAEgKQADgLAHgHQAGgHAJgEQAHgDALAAQALAAAJADQAJAEAFAFQAFAGADAIQACAHAAAJQAAAHgCADQgDAEgCABQgDABgFAAIg6AAQAAALADAFQACAGAFAFQAFAEAFACQAGACAGAAIAJgBIAIgCIAHgDIACAAIACABIAEAJIABACQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgFADgFABIgLADIgLABQgPAAgLgGgAiCAKIgBgKIgFgKQgCgEgGgDQgGgDgIAAQgGAAgGADQgFADgDAEQgEAEgCAGQgCAEAAAGIA4AAgAkkBHQgJgDgEgFQgFgEgDgHIgEgOIAAgpQAAgKADgNQAEgLAEgHQAEgHAIgGQAKgHAIgCIAngIIACACIABAIIAAADIgCACIgaAFIgRAGQgGADgEAEQgEAEgCAHQgCAGgBAJIAMgGIALgDIAKgBQALAAAGADQAIADAEAEQAFAFACAGQADAEACAIIABAPIgBAOIgFAOQgDAFgGAHQgGAFgIADQgLAEgKAAQgKAAgJgEgAkWgJQgEAAgHAEIgKAFIgCAYQAAAIACAHQACAHADAEQADAFAFACQAHADAHAAQAHAAAGgDQAFgBAEgEIAFgJIADgJIABgKQAAgGgBgIIgEgKQgCgDgGgFQgFgDgIAAgAmUBFQgLgGgGgMQgFgMAAgTQAAgOADgIQADgKAHgIQAHgHAIgEQAIgDAKAAQAMAAAIADQAJAEAFAFQAGAGACAIQADAIAAAIQAAAFgCAFQgDAEgDABQgDABgFAAIg6AAQAAAJADAHQADAIAEADQAEAEAGACQAGACAHAAIAIgBIAJgCIAGgDIACAAIACABIAEAJIABACQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQgEADgGABIgLADIgLABQgPAAgLgGgAlgAKIgBgKQgBgGgEgEQgCgEgGgDQgGgDgHAAQgGAAgGADQgGADgDAEIgGAKIgCAKIA4AAIAAAAgAGoBIIgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgKghQgBgGgDgDQgDgDgEgBIgJgCIgPAAIAAAvIgBADIgDAAIgLAAIgCAAIgBgDIAAgvIgQAAIgIACIgHAEIgFAJIgKAhQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCAAIgMAAIgCAAIAAgCIAAgBIAKgjIADgIIAFgHQAFgDAEgBIgBgBQgEgCgEgFQgDgFgCgEIgHgbIAAgCIACgBIALAAIACAAIABACIAIAaIAFAHQACACAFACIAIABIANAAIAAglIABgCIACgBIALAAIADABIABACIAAAlIANAAIAIgBQAEgBADgDQACgDADgEIAIgaIABgCIACAAIALAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIgIAbQgBAEgDAFQgDAFgGACIAAABQAEABAEADIAFAGIADAJIALAjIAAABIgBACIgCAAgAEGBIIgDAAIAAgDIAAhLIgCAAIgzBMIgDACIgEAAIgEAAQgEAAgCgCQgCgBAAgFIAAhdIAAgDIADgBIALAAIACABIABADIAABMIABAAIAzhNIADgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAFAAQAEAAACACQACACAAAEIAABdIAAADIgDAAgAnxBIIgDAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAh4IgnAAIgDgBIAAgCIAAgKIAAgDIADAAIBjAAIACAAIABADIAAAKIgBACIgCABIgpAAIAAB4IgBADIgCAAg");
	this.shape.setTransform(0,97.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjGCIQgDgCAAgDIAAjYIhMAAIgGBSIgFArQgDAUgFASQgGAQgJANQgMATgSAHQgMAFgWAAIgDAAQgHAAAAgHIAAgnQAAgGAHAAIABAAQAVAAAJghQAEgNAEgnIAHhvIABgIQAAgHAFgFQAFgHAJAAICXAAQAJAAAGAGQAGAGAAAIIAAD4QAAAHgIAAIgtAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAq9CKIhoAAQgIAAgGgGQgFgFgBgJIAAjrQABgHAEgGQAGgHAKAAICfAAQAGAAABAJIAAAjQgBAIgGAAIh3AAIAAAxIBFAAQAgAAAZAUQAXASAHAhIABAQQgBAngcAZQgZAXgkAAIgEAAgAr8BVIA4AAQARAAALgKQALgLgBgQQAAgQgLgKQgKgKgQAAIg5AAgAK1CKQgHAAAAgHIAAjYIhIAAQgGAAAAgHIAAgmQAAgHAGAAIDNAAQAHAAAAAHIAAAmQgBADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhJAAIAADYQAAAHgHAAgAGOCKQgGAAAAgHIAAj5QABgIAFgGQAGgFAIAAIBkAAQAVABAJADQAnAMAPAkQAJAQgBATQABAmgbAYQgZAZgkAAIhBAAIAABcIgBAFQgCAEgEAAgAHEgNIA1AAQAQAAALgLQAKgKAAgPQAAgPgKgKQgMgLgRAAIgzAAgAE+CKQgEAAgDgHIgPgzIhaAAIgQAyIgBAEQgCAEgFAAIgvAAQgDAAgDgDQgCgCABgEIBRj0QADgJAEgEQAGgJAMABIAkgBQAQAAAHAWIBRD0QACAEgDACQgBADgEAAgADcAfIA+AAIgdhoIgDAAgABBCKQgDAAgDgFIgYhVQgDgNgHgIQgHgHgJgDQgJgDgNAAIgfAAIAAB1QAAAHgHAAIguAAQgHAAAAgHIAAkFQAAgHAHAAIAuAAQAHAAAAAHIAABlIAsgBQADgBAHgEQAHgEAFgGQAEgGAEgOIAShCQABgEADgBIAEgBIArAAQAEAAABADQADADgBACIgSBHQgFARgIAMQgKANgLAHIAAACQALAEAGADQAHADAEAGIAHANIAeBsQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgDADgEAAgAoGCKQgeAAgVgVQgWgWAAgeIAAiBQAAgdAVgWQAXgWAeAAIBwAAQAHAAAAAHIAAAmQAAAHgGAAIhrAAQgIAAgGAFQgGAGAAAIIAAAeIBxAAQAHAAAAAHIAAAjQAAAGgGAAIhyAAIAAA1QAAALAHAFQAGAFAHAAIBrAAQAGAAAAAGIAAAnQAAAHgGAAg");
	this.shape_1.setTransform(0,65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApEQIgxg0IAAiBQgBgHgFgFQgEgEgGAAIiSgRIhkhiQgFgEAAgHQAAgHAFgEIDQjQQAFgFAGAAQAGAAAFAFIE3E3QAFAFAAAGQAAAGgFAFIjQDRQgEAEgHAAQgGAAgFgEg");
	this.shape_2.setTransform(46.4,-25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApEQIk4k4QgEgEAAgHQAAgGAEgFIDRjQQAFgFAGAAQAHAAAEAFIAxAzIAACCQAAAHAFAEQAFAFAGAAICSAQIBkBiQAFAFAAAGQAAAHgFAEIjQDRQAAADgJABIgBAAQgHAAgFgEg");
	this.shape_3.setTransform(-46.4,-36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/EPIjPjQQgFgFAAgGQAAgGAFgFIE3k4QAFgEAGAAQAHAAADAEIDRDRQAFAEAAAHQAAAGgFAFIgzAxIiCAAQgGAAgFAFQgFAFAAAGIgQCSIhjBkQgEAFgHAAQgGAAgFgFg");
	this.shape_4.setTransform(5.3,-77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+EPIjRjQQgEgFAAgGQAAgGAEgEIA0gyICCAAQAGAAAFgFQAEgFAAgGIARiSIBihkQAEgFAHAAQAGAAAFAFIDQDQQAFAEAAAHQAAAGgFAFIk3E3QgFAFgGAAQgGAAgFgFg");
	this.shape_5.setTransform(-5.3,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACUCjIhbhcQgFgFgGAAQgHAAgEAFIhyBcIiNAAQgHAAgEgFQgFgFAAgGIAAklQAAgGAFgFQAEgFAHAAIG5AAQAHAAAEAFQAFAFAAAGIAAElQAAAGgFAFQgEAFgHAAg");
	this.shape_6.setTransform(36.5,-59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjcCjQgGgBgFgFQgFgEAAgGIAAklQAAgGAFgFQAFgFAGAAIBJAAIBbBcQAFAEAGAAQAHAAAEgEIByhcICNAAQAHAAAEAFQAFAFAAAGIAAElQAAAGgFAEQgEAFgHABg");
	this.shape_7.setTransform(-36.5,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiSDtQgGAAgFgFQgFgEAAgHIAAm5QAAgHAFgEQAFgFAGAAIElAAQAGAAAFAFQAFAEAAAHIAAEUIhchaIBcBxIAACOQAAAHgFAEQgFAFgGAAg");
	this.shape_8.setTransform(-29.1,-67.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiSDsQgGAAgFgEQgFgFAAgGIAAhJIBchcQAEgEAAgGQAAgHgEgEIhchxIAAiOQAAgGAFgFQAFgFAGAAIElAAQAGAAAEAFQAFAFABAGIAAG5QgBAGgFAFQgEAEgGAAg");
	this.shape_9.setTransform(29.1,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-104.7,165.2,209.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+aD+QhqhqAAiUQAAiUBqhpQBphpCVgBQBuAABZA9IgIAHQhAA3gjBMQgiBNAABTQAABUAiBMQAjBNBAA3IAIAHQhaA8htAAQiVABhphqgA2mErIAIgHQBAg3AjhNQAjhMAAhUQAAhTgjhNQgjhMhAg3IgIgHQBag9BtAAQCVABBqBpQBpBpAACUQAACVhpBoQhqBqiVAAQhtAAhag8gA3LEPQg6gyghhGQghhIAAhPQAAhOAhhJQAhhFA6gyIAOgLIANALQA7AyAfBFQAiBJAABOQAABPgiBIQgfBGg7AyIgNALgAuFDfIAAgLIgDAJIgDAAIgEgJIAAALIgDAAIAAgPIAEAAIAEAKIAFgKIADAAIAAAPgAubDfIAAgMIgFAAIAAgDIALAAIAAADIgEAAIAAAMgAfvB/IgEgCIgEgGIgBgFIABgHIAEgEIAEgEIAHgBIAGABIAEAEIAEAEIABAHIgBAFIgEAGIgEACIgGACQgEAAgDgCgAfxBnIgDACIgDAEIgBAFQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIADAEIADADIAFAAIAEAAIAEgDIACgEIABgEIgBgFIgCgEIgEgCIgEgBgAbkBbQgjgkABg2QgBg0AjglQAjgjAyAAQAxAAAbAjIAAh9IA0AAIAAFOIg0AAIAAgeQgbAkgxgBQgyAAgjgjgAcLg0QgUAWAAAfQAAAgAUAWQATAWAiABQAfAAAVgXQAUgVAAghQAAgggUgVQgUgWggAAQgiAAgTAWgAUBBbQgjgkAAg2QAAg0AjglQAigjAzAAQAwAAAcAjIAAgdIAzAAIAADuIgzAAIAAgeQgcAkgwgBQgzAAgigjgAUng0QgTAWAAAfQAAAgATAWQAUAWAiABQAfAAAVgXQATgVABghQgBgggTgVQgVgWgfAAQgiAAgUAWgAQQBbQgjgjAAg3QAAg1AjgkQAlgjA4AAQAbAAAVAHQATAGAUAPIgaAqQgegVggAAQggABgUAUQgUAWAAAgQAAAiAUAVQAUAVAgABQAggBAegVIAaAqQgUAQgTAGQgVAGgbAAQg4AAglgjgAJLBcQgjgiAAg5QAAg2AhgjQAigjA0AAQAyAAAgAjQAfAjABA2IgBAUIiyAAQAGAeAUAQQASANAcAAQAlAAAggaIAaAnQgnAhg8AAQg2ABghgjgAJzg9QgQAQgEAbIB8AAQgFgcgPgQQgQgPgZAAQgbAAgQAQgAGGBnQgTgVAAgsIAAhsIgxAAIAAgvIAxAAIAAhIIA0AAIAABIIBWAAIAAAvIhWAAIAABrQABAoAiAAQAYAAAWgOIAPAtQgLAIgTAGQgRAEgSAAQgtABgTgYgABLBgIAYgpQAgAZAwAAQA2AAAAgdQAAgTgpgGIgZgDQhTgMAAg5QAAgkAbgUQAbgVAuAAQA8AAAmAZIgXAqQgNgIgSgGQgWgGgVgBQgWAAgNAIQgMAHABAOQgBAKAMAGQAKAFATACIAZAEQBTAMAAA6QAAAigcAWQgeAVgzAAQg9AAgqgegAi7BbQgjgkABg2QgBg0AjglQAigjA0AAQAwAAAbAjIAAgdIAyAAIAADuIgyAAIAAgeQgbAkgwgBQg0AAgigjgAiUg0QgUAWAAAfQAAAgAUAWQAUAWAhABQAgAAAUgXQAUgVAAghQAAgggUgVQgUgWggAAQghAAgUAWgAf5B5IgEgGIgCAAIAAAGIgDAAIAAgPIAHAAIAEABQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIgCADIgDABIAFAGgAfzBxIAEAAIABAAIABgCIgBgCIgBAAIgEAAgAYaB5IAAjuIA0AAIAAAdQAXgjAoAAQAVAAAQAHIgQAwQgPgFgSAAQgygBAAA/IAACEgANHB5IAAjuIAzAAIAAAdQAWgjApAAQAUAAARAHIgQAwQgPgFgRAAQg0gBAAA/IAACEgAlAB5IAAiDQAAhAg0AAQgbAAgQARQgRARAAAeIAACDIg0AAIAAiDQAAhAg0AAQgbAAgPARQgQAQgBAfIAACDIg0AAIAAjuIA0AAIAAAdQAYgjAuAAQA0AAAbAqQAcgrA5ABQArAAAaAaQAZAbgBArIAACUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.3,-36,410.7,72);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCwIgMg1Ih5AAIgUA1IhlAAICOlBQAIgRANgHQAKgGASAAIBKAAIBOFfgAA4AyIgdiCIgNAiIgkBgIBOAAg");
	this.shape.setTransform(42.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhCwQgcgGgSgIIAOhOIAMAFQAZAKASAFQAUAEAcAAQAXAAAOgJQASgJAAgRQAAgLgLgKQgLgJgagNQhUgkAAg6QABgzAtghQAtggBFgBQAuABApAPIgNBLIgJgDQgjgOglAAQgaAAgPAKQgMAIAAANQAAALAMAKQAKAIAeAOQBRAjAAA7QgBA3gtAhQguAghKAAQgfAAgegFg");
	this.shape_1.setTransform(12.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNCwIA8lfIBfAAIg9Ffg");
	this.shape_2.setTransform(-9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCwIhVkxQgwgag1gMIABgIICbAAQAkACAIAcIApDRIBfjuIBlAAIiXFeg");
	this.shape_3.setTransform(-37.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-18.2,118.7,36.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoMHrIAAvjIDiAAIAAFdQA4gJA3AAQCnAABqBPQB5BXAACgQAACChQBVQhDBEh1AhQhkAbh9AAQiQAAhigOgAksAOIAAE8QAaAGAzAAQBQAAA3gqQA8gwAAhOQAAhPhAgsQg1glhKAAQgkAAgtAGgAEsHvIAAvnIDhAAIAAPng");
	this.shape.setTransform(57.3,0.1,0.32,0.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhyH0IAAspIkNAAIAAi+IL/AAIAAC+IkRAAIAAMpg");
	this.shape_1.setTransform(24.3,0,0.32,0.32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlmH4IAAvaQB6gVC4AAQDLAABlBRQAxAnAcA7QAeA+AABHQAABJgYA+QgYA6gsArQhwBpjUAAQgtAAgggEIAAFmgAiGlDIAAEoQAbAFAxAAQBYAAA0grQA0grAAhNQAAhFgugnQgugnhSAAQg9AAghAJg");
	this.shape_2.setTransform(-2.1,-0.2,0.32,0.32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADVH0IhOkBIkcAAIhIEBIjqAAIEyvnIEnAAIE2PngAgijpQgNBAgKAgIg7DTIDbAAIg+jTQgMgkglicIgDAAIgXBgg");
	this.shape_3.setTransform(-32.5,0,0.32,0.32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACVH0QgWgsgVhAIgjhwQgdhhgmgtQgwg5hUAAIgsAAIAAGjIjgAAIAAvnIDgAAIAAGgIAUAAIESmgIESAAIlcG8QBaAXA5A/QAvA2AiBkIA2ChQAfBaAfBAg");
	this.shape_4.setTransform(-61.3,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-16.3,148.1,32.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+H0IAAvnIJoAAIAAC5ImFAAIAADRIFuAAIAAC2IluAAIAADtIGZAAIAAC6g");
	this.shape.setTransform(28.3,0,0.32,0.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGF0QiFiHAAjeQAAj2CgiSQCWiJDrAAQBRAABHAOQA8AMAiASIguC0QhYglhmAAQiNAAhUBSQhdBYAACfQABCXBVBXQBTBYCWAAQAyAAA2gJQAygJAjgOIAiCwQgiAShAAMQhKANhVAAQj5AAiMiPg");
	this.shape_1.setTransform(1.1,0,0.32,0.32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlyHuIAAvVQAtgJBRgGQBTgGBUAAQBoAABCAMQBGANA1AgQA3AdAfAxQAjA0AABCQgBBGgoA3QgrA7hRAeIAAADQBZAYA1A8QA5BCAABeQAACAhpBUQg4AthcAWQhjAYiQAAQiTAAhigPgAiSFSQAXADBBAAQBTAAAyggQA6gmAAhKQAAhIg7gkQg2ghhYAAIhOAAgAiSlRIAADpIBKAAQBWAAAwghQAwghAAg5QAAg4grgeQgogehMAAQg5AAgoAGg");
	this.shape_2.setTransform(-26.8,0.1,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-16.5,77.2,33);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("EhDPAMfIAA49MCGeAAAIAAY9g");
	this.shape.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-25.6,275.5,51.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B8EF").s().p("AkwA/QgaAAgTgSQgSgTAAgaQAAgZASgSQATgTAaAAIJhAAQAbAAASATQATASAAAZQAAAagTATQgSASgbAAg");
	this.shape.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-1.3,14.8,2.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("A50F8IAAr3MAzpAAAIAAL3g");
	this.shape.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-18.2,158.8,36.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLDcIAAm3IEOAAIAABSIiqAAIAABbICgAAIAABQIigAAIAABpICzAAIAABRg");
	this.shape.setTransform(63.7,2.3,0.48,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxDcIAAljIh3AAIAAhUIFRAAIAABUIh4AAIAAFjg");
	this.shape_1.setTransform(46.2,2.3,0.48,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaEPIAAiCQAAhyAHhHIgCAAQgfBRgrBLIhYCfIhyAAIAAm4IBbAAIAACDQAAB9gEBJIACAAQAghJAvhUIBcisIBnAAIAAG4gAhgkOIBEAAQABAUAGAKQAHAKAOAAQAOAAAHgKQAHgJACgVIBCAAQgEBRhdAAQhXAAgIhRg");
	this.shape_2.setTransform(26.7,-0.2,0.48,0.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABeDcIgjhxIh8AAIgfBxIhoAAICHm3ICBAAICJG3gAgYg7IgbBbIBgAAIgbhbQgIgbgNg7IgBAAIgUBWg");
	this.shape_3.setTransform(5.5,2.3,0.48,0.48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzCkQg7g8ABhiQAAhrBGhAQBDg+BlAAQAlABAfAGQAaAGAPAHIgUBQQgmgRgtAAQg/ABgkAjQgpAnAABFQAABDAmAmQAkAnBCAAQAvAAAkgNIAQBOQgQAHgcAFQghAGglABQhtAAg+hAg");
	this.shape_4.setTransform(-14.3,2.2,0.48,0.48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABeDcIgihxIh9AAIgfBxIhoAAICHm3ICBAAICJG3gAgYg7IgbBbIBgAAIgbhbQgIgbgNg7IgBAAIgUBWg");
	this.shape_5.setTransform(-40.6,2.3,0.48,0.48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABSDcIAAi4IiiAAIAAC4IhlAAIAAm3IBlAAIAACpICiAAIAAipIBkAAIAAG3g");
	this.shape_6.setTransform(-61.6,2.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-13.2,140.9,26.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicCjQg3g/AAhhQAAhjA6hBQA9hCBeAAQBiAAA6BCQA2A+AABgQAABpg8BAQg7A+hgAAQhgAAg5hBgAhNhoQgdApAABAQAABCAdAoQAdApAwAAQAyAAAcgqQAcgqAAhAQABg+gcgpQgegsgxAAQgwAAgdArg");
	this.shape.setTransform(41.8,0,0.48,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACSDcIgHipQgEhoAAhLIgCAAQgVBUgcBVIg2CsIhMAAIgvirQgbhhgNhJIgBAAIgIC1IgICnIhcAAIAcm3ICFAAIArCTQAbBhAKA7IABAAQAXheASg+IAwiTICCAAIAYG3g");
	this.shape_1.setTransform(17.4,0,0.48,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJDeIAAiuIgYAAQgdABgTAQQgPARgOAoIgVA/QgJAagHALIhqAAQAMgSAKgfQAQg0AJgWQAQgoAVgVQAMgMAZgLIAAgCQgogIgZgXQgcgdAAguQAAg6AtgjQAugjBhAAQBHAAA4AJIAAGygAgViEQgXARAAAgQAAAdAZARQAUAQAkAAQAYAAAMgCIAAh4QgcgEgNAAQghAAgUAPg");
	this.shape_2.setTransform(-6.3,-0.1,0.48,0.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AidDeIAAmyQA1gJBSAAQBZAAAsAkQAWARAMAaQANAbAAAgQAABDgoAkQgxAuhdAAQgUAAgOgBIAACdgAg6iNIAACCQALADAWAAQAmAAAXgUQAXgTAAghQAAgfgUgRQgUgSgkAAQgaAAgPAFg");
	this.shape_3.setTransform(-23.1,-0.1,0.48,0.48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABODcIAAllIibAAIAAFlIhkAAIAAm3IFjAAIAAG3g");
	this.shape_4.setTransform(-43.5,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-10.9,104.1,21.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACwGtIAAj+QAAjfAOiIIgEAAQg8CbhVCVIitE1IjeAAIAAtZICzAAIAAD+QAADrgKCZIAFAAQBBiUBYidIC3lRIDHAAIAANZg");
	this.shape.setTransform(118.5,-0.3,0.48,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFmGtQgQgjgRg6IgchhQgZhRghgmQgrgyhJgBIgeAAIAAFoIi5AAIAAloIgfAAQhIABgrAyQggAmgaBRIgbBhQgRA6gRAjIjEAAQAXgzAahPIAqiDQAdhbAsgyQAzg5BSgPIkml/IDjAAIDVFlIASAAIAAllIC5AAIAAFlIASAAIDWllIDiAAIkmF/QBRAKA1A4QAsAyAfBcIAqCHQAYBRAWAyg");
	this.shape_1.setTransform(70.6,-0.3,0.48,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkRGtIAAtZIIRAAIAACfIlNAAIAACyIE6AAIAACdIk6AAIAADMIFfAAIAACfg");
	this.shape_2.setTransform(28.3,-0.3,0.48,0.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhiGtIAAq2IjnAAIAAijIKTAAIAACjIjrAAIAAK2g");
	this.shape_3.setTransform(-5.7,-0.3,0.48,0.48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AC2GtIhCjcIj0AAIg9DcIjKAAIEHtZID9AAIELNZgAgcjIQgNA2gIAdIgzC1IC8AAIg1i1QgKgeggiIIgCAAIgTBTg");
	this.shape_4.setTransform(-38.8,-0.3,0.48,0.48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlyEXQA/gIAkgmQAkglAQhRQANhDAAhqIAAl5IJBAAIAANaIjCAAIAAq6IjBAAIAADMQAAC2geBnQglB+hbA2QhLAqhgAAg");
	this.shape_5.setTransform(-80.6,0,0.48,0.48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACYGtIAAq6IkvAAIAAK6IjDAAIAAtZIK1AAIAANZg");
	this.shape_6.setTransform(-118.9,-0.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-20.9,271.1,41.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6ElIAApIIFoAAIAABsIjiAAIAAB6IDVAAIAABqIjVAAIAACLIDvAAIAABtg");
	this.shape.setTransform(126.6,3.2,0.48,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCElIAAnaIieAAIAAhuIHBAAIAABuIigAAIAAHag");
	this.shape_1.setTransform(103.5,3.2,0.48,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB4FoIAAitQAAidAKhZIgDAAQgpBog6BoIh1DTIiYAAIAApIIB6AAIAACtQAACbgHBtIAEAAQAvhrA5hmIB8jkICIAAIAAJIgAiAlnIBbAAQABAbAIANQAJAOATAAQATAAAKgOQAJgNACgbIBZAAQgHBsh7AAQh0AAgLhsg");
	this.shape_2.setTransform(77.6,0,0.48,0.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB8ElIgtiXIimAAIgpCXIiKAAICzpIICsAAIC2JIgAgTiIIgOA4IgjB7ICAAAIglh7IgbhwIgCAAIgNA4g");
	this.shape_3.setTransform(49.4,3.2,0.48,0.48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADCElIgJjhQgFiKAAhlIgDAAQgaBsgnB2IhIDkIhlAAIg/jjQghh1gUhuIgCAAIgKDxIgKDfIh7AAIAlpIICxAAIA5DDQAgB0ASBcIABAAQAeh4AZhZIA/jCICtAAIAgJIg");
	this.shape_4.setTransform(18.2,3.2,0.48,0.48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB4ElIAAitQAAibAKhbIgDAAQgpBqg6BmIh1DTIiYAAIAApIIB6AAIAACtQAACbgHBtIAEAAQAvhrA5hkIB8jmICIAAIAAJIg");
	this.shape_5.setTransform(-13.9,3.2,0.48,0.48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABtElIAAj1IjYAAIAAD1IiFAAIAApIICFAAIAADhIDYAAIAAjhICEAAIAAJIg");
	this.shape_6.setTransform(-42.7,3.2,0.48,0.48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AB4ElIAAitQAAibAJhbIgCAAQgoBog7BoIh1DTIiYAAIAApIIB6AAIAACtQAACkgHBkIAEAAQAvhrA5hkIB8jmICIAAIAAJIg");
	this.shape_7.setTransform(-71.5,3.2,0.48,0.48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjREnIAApBQBGgMBtAAQB3AAA6AvQAdAXAQAjQASAkAAAqQAABYg2AxQhBA+h8AAQgeAAgPgDIAADSgAhOi8IAACtQAQADAcAAQA0AAAegZQAegaABgtQAAgogbgXQgcgXgvAAQglAAgSAGg");
	this.shape_8.setTransform(-97.3,3.1,0.48,0.48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABoElIAAncIjPAAIAAHcIiEAAIAApIIHXAAIAAJIg");
	this.shape_9.setTransform(-124.3,3.2,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-17.3,271.3,34.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60000").s().p("Eg1XAL3IAA3tMBquAAAIAAXtg");
	this.shape.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-30.4,273.3,60.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYDsIAAjGIiuAAIAADGIhrAAIAAnXIBrAAIAAC2ICuAAIAAi2IBqAAIAAHXg");
	this.shape.setTransform(124.2,0,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABhDsIAAiMQAAh5AIhMIgDAAQghBWgvBRIhdCqIh7AAIAAnXIBiAAIAACNQAAB9gFBWIADAAQAjhPAxhXIBji6IBuAAIAAHXg");
	this.shape_1.setTransform(104.9,0,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AinDTIAWhSQAUAJAdAJQAkAKAegBQAnAAAXgQQAXgQAAgeQAAg/hhAAIgtAAIAAhMIAsAAQAlAAAWgQQAYgQAAgbQAAgYgSgOQgUgPggAAQguAAg5AcIgahMQBAgmBUAAQBKAAAtAjQAsAhAAA2QAAArgbAdQgaAdgqAKIAAABQAuAHAfAaQAiAgAAAuQAABIhBAmQg1AghLAAQhVgBg5ggg");
	this.shape_2.setTransform(87.5,0,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABkDsIgkh5IiGAAIgiB5IhuAAICQnXICKAAICTHXgAgahAIgcBjIBmAAIgdhjQgHgXgPhEIgCAAIgVBbg");
	this.shape_3.setTransform(70.5,0,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiODsIAAnXIEdAAIAABYIiyAAIAAF/g");
	this.shape_4.setTransform(57.4,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABkDsIgkh5IiGAAIghB5IhvAAICQnXICKAAICTHXgAgPhtIgLAtIgcBjIBmAAIgdhjQgHgXgPhEIgCAAIgKAug");
	this.shape_5.setTransform(40.5,0,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACcDsIgHi1QgEhvAAhRIgCAAQgWBZgfBcIg5C4IhSAAIgyi3QgahagRhcIgCAAIgIDBIgIC0IhjAAIAenXICOAAIAuCeQAaBcAOBLIABAAQAThSAZhWIAzidICMAAIAZHXg");
	this.shape_6.setTransform(19.5,0,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaAjIAAhFIC1AAIAABFg");
	this.shape_7.setTransform(3.2,2.1,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1DsIAAl9Ih/AAIAAhaIFpAAIAABaIiBAAIAAF9g");
	this.shape_8.setTransform(-6.5,0,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiVDsIAAnXIEhAAIAABYIi2AAIAABiICsAAIAABVIisAAIAABwIDAAAIAABYg");
	this.shape_9.setTransform(-21.3,0,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABYDsIAAjGIiuAAIAADGIhsAAIAAnXIBsAAIAAC2ICuAAIAAi2IBrAAIAAHXg");
	this.shape_10.setTransform(-38.9,0,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AioDuIAAnRQA3gKBZABQBggBAvAmQAXASANAcQAOAeAAAiQAABHgrAnQg1AyhjAAQgUAAgQgDIAACqgAg+iYIAACMQALADAYgBQApABAZgVQAYgVAAgjQAAgigVgRQgWgTgmAAQgfAAgNAEg");
	this.shape_11.setTransform(-56.2,-0.1,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiVDsIAAnXIEhAAIAABYIi2AAIAABiICsAAIAABVIisAAIAABwIDAAAIAABYg");
	this.shape_12.setTransform(-71.9,0,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1DsIAAl9Ih/AAIAAhaIFpAAIAABaIiBAAIAAF9g");
	this.shape_13.setTransform(-87.5,0,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABXDsIAAjGIitAAIAADGIhrAAIAAnXIBrAAIAAC2ICtAAIAAi2IBsAAIAAHXg");
	this.shape_14.setTransform(-104.9,0,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABhDsIAAiMQAAh4AHhNIgCAAQghBWgvBRIheCqIh6AAIAAnXIBiAAIAACNQAAB9gFBWIADAAQAlhUAvhSIBji6IBuAAIAAHXg");
	this.shape_15.setTransform(-124.2,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-9.8,264,19.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+E1IAAi3QAAifALhkIgDAAQgsBxg9BqIh8DfIifAAIAAppICAAAIAAC3QAACmgHBxIADAAQAwhrA/hwICDjzICPAAIAAJpg");
	this.shape.setTransform(126.3,0.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADNE1IgJjtQgGiGAAh3IgDAAQgbB0gqB6IhLDyIhrAAIhDjwQgih5gWh3IgBAAIgGCDQgDBPgDAtIgLDrIiBAAIAnppIC7AAIA9DOQAkCIAQBUIABAAQAhiFAahXIBCjOIC3AAIAhJpg");
	this.shape_1.setTransform(98.1,0.1,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACEE1IgwifIiwAAIgsCfIiRAAIC9ppIC2AAIDAJpgAgUiPQgJAmgGAVIglCBICHAAIgmiBQgKghgThXIgCAAIgOA9g");
	this.shape_2.setTransform(70.4,0.1,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABzE1IAAkDIjkAAIAAEDIiNAAIAAppICNAAIAADuIDkAAIAAjuICMAAIAAJpg");
	this.shape_3.setTransform(45.7,0.1,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiiDnQhShUAAiKQAAiXBjhaQBdhWCQAAQAzAAAsAJQAlAIAVALIgdBvQg2gXg/AAQhXAAg0AzQg5A2AABiQAABdA1A3QAzA3BdAAQAegBAigFQAfgHAVgIIAWBtQgWAMgnAGQgtAJg1AAQiaAAhXhYg");
	this.shape_4.setTransform(14.9,0,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjEE1IAAppIF8AAIAAByIjwAAIAACBIDiAAIAABwIjiAAIAACTID9AAIAABzg");
	this.shape_5.setTransform(-13,0.1,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGE1IAAn0IinAAIAAh1IHbAAIAAB1IipAAIAAH0g");
	this.shape_6.setTransform(-33.4,0.1,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiiDnQhShUAAiKQAAiXBjhaQBehWCPAAQAzAAAsAJQAlAIAVALIgdBvQg2gXg/AAQhYAAgzAzQg5A2AABiQAABdA1A3QAyA3BdAAQAfgBAhgFQAggHAVgIIAVBtQgVAMgnAGQgtAJg1AAQiaAAhXhYg");
	this.shape_7.setTransform(-54.9,0,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjEE1IAAppIF8AAIAAByIjwAAIAACBIDiAAIAABwIjiAAIAACTID9AAIAABzg");
	this.shape_8.setTransform(-75.3,0.1,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADNE1IgKjtQgFiigBhbIgCAAQgfB8gmByIhLDyIhsAAIhCjwQgjh4gVh4IgCAAIgLD/IgLDrIiBAAIAnppIC6AAIA9DOQAkCDARBZIABAAQAfiCAbhaIBDjOIC2AAIAjJpg");
	this.shape_9.setTransform(-101.2,0.1,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjkEyIAApfQA/gNB2AAQBAAAApAHQAqAIAiAUQAiASATAfQAWAggBApQABArgZAhQgcAlgyATIAAACQA3APAiAlQAiAoABA7QAABOhBA1QhGA4irAAQhaAAg+gJgAhaDRQAPACAoAAQAyAAAfgUQAkgXAAguQAAgtglgWQgggUg3gBIgwAAgAhajQIAACQIAuAAQA0ABAfgWQAdgUAAgjQAAgjgagSQgagSgtAAQgngBgWAEg");
	this.shape_10.setTransform(-127.4,0.1,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-12.7,273.2,25.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABqE+IAAiZQAAiIAIhRIgCAAQgiBWg2BhIhnC7IiGAAIAAoFIBsAAIAACaQAACNgHBcIADAAQAqhdAzhcIBtjKIB5AAIAAIFgAhxk9IBQAAQABAXAHAMQAJAMAQAAQAQAAAJgMQAIgMACgXIBOAAQgGBehsAAQhnAAgJheg");
	this.shape.setTransform(128,-0.3,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai3C/QhBhKAAhyQAAh0BFhMQBHhNBvgBQBzABBDBNQBABJAABwQAAB8hHBLQhFBIhxABQhwgBhDhMgAhbh7QghAwAABMQAABNAiAwQAiAwA4AAQA6AAAigyQAhgwAAhMQAAhJgggxQgjgzg6AAQg5AAgiAyg");
	this.shape_1.setTransform(106.4,2.1,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai/EAIAAn8QA4gLBgAAQA0AAAjAHQAkAGAcARQAcAPARAZQARAbAAAiQAAAlgVAcQgWAfgrAPIAAACQAvAMAbAfQAeAiAAAxQAABDg2ArQg7AviPAAQhLAAg0gIgAhLCvQALACAjAAQApAAAagRQAfgUAAgmQAAglgggTQgbgRgtAAIgoAAgAhLiuIAAB5IAnAAQArAAAZgSQAYgRAAgdQAAgdgVgQQgVgPgnAAQghAAgRADg");
	this.shape_2.setTransform(86.6,2.1,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHDBQhFhGAAh0QAAh+BShLQBOhIB5AAQAqAAAlAIQAeAGATAJIgYBeQgugUg1AAQhIAAgrAqQgwAvAABRQAABPAsAsQAqAuBOAAQAaAAAcgFQAagFASgGIASBbQgSAJghAGQgmAHgtAAQiAAAhIhKg");
	this.shape_3.setTransform(67.8,2.1,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AikEDIAAoFIE+AAIAABgIjIAAIAABsIC9AAIAABeIi9AAIAAB7IDTAAIAABgg");
	this.shape_4.setTransform(39.8,2.3,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6EDIAAmiIiMAAIAAhjIGNAAIAABjIiOAAIAAGig");
	this.shape_5.setTransform(22.7,2.3,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABqE+IAAiZQAAiIAJhQIgDAAQgjBbg0BbIhoC7IiGAAIAAoEIBsAAIAACaQAACPgGBZIACAAQAnhWA2hiIBujKIB4AAIAAIEgAhxk9IBQAAQABAXAHAMQAIAMARAAQAQAAAJgMQAHgMADgXIBPAAQgHBfhsAAQhnAAgJhfg");
	this.shape_6.setTransform(3.6,-0.1,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABuEDIgoiFIiSAAIglCFIh6AAICfoFICYAAICgIFgAgRh4IgMAyIgfBsIBxAAIgghsQgKgigOhCIgCAAIgMAyg");
	this.shape_7.setTransform(-17.2,2.3,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai/EAIAAn8QAYgEApgDQArgEAsAAQA1ABAjAGQAjAHAcAPQAcAQARAZQARAbABAjQAAAjgWAdQgVAegrAQIAAACQAuANAbAdQAeAjAAAwQAABDg2AsQg6AuiQABQhNgBgygHgAhKCvQALACAigBQAqABAagSQAegSAAgnQAAglgfgTQgbgRguAAIgnAAgAhKiuIAAB5IAmAAQArAAAagRQAYgSAAgdQgBgdgVgQQgWgPgmAAQgeAAgTADg");
	this.shape_8.setTransform(-36,2.3,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABqEDIAAiZQAAiHAJhSIgDAAQgkBdgzBaIhoC7IiGAAIAAoFIBsAAIAACaQAACNgGBcIADAAQAqheAyhZIBujMIB4AAIAAIFg");
	this.shape_9.setTransform(-56.3,2.3,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai/EAIAAn8QA2gLBiAAQA1ABAiAGQAkAHAcAPQAcAQARAZQARAbAAAjQAAAjgVAdQgWAegqAQIAAACQAuANAcAdQAdAjAAAwQAABDg2AsQg7AuiPABQhOgBgxgHgAhLCvQAMACAigBQApABAbgSQAegSAAgnQAAglgfgTQgbgRguAAIgoAAgAhLiuIAAB5IAnAAQArAAAZgRQAYgSAAgdQAAgdgVgQQgWgPgmAAQgeAAgUADg");
	this.shape_10.setTransform(-75.8,2.3,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai3DnIAYhaQAVALAgAJQAoALAhAAQArAAAZgSQAZgSAAggQAAhFhqAAIgyAAIAAhUIAxAAQApAAAYgSQAagSAAgeQAAgagUgPQgVgQgjAAQgcAAghAKQgcAIgZANIgchUQBGgpBcAAQBRAAAyAmQAwAkAAA7QAAAvgeAhQgcAfguALIAAACQAzAHAiAdQAkAjAAAyQAABPhGAqQg7AihTAAQhcAAg/gkg");
	this.shape_11.setTransform(-94,2.3,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABuEDIgoiFIiTAAIglCFIh5AAICeoFICYAAIChIFgAgRh4IgMAyIgfBsIBxAAIgghsIgZhkIgBAAIgMAyg");
	this.shape_12.setTransform(-112.6,2.3,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ai5EFIAAn+QA/gLBgAAQBoAAA0AqQAaAUAOAfQAQAgAAAlQAABOgwArQg6A3htAAQgVAAgTgDIAAC6gAhFinIAACaQAPADAZAAQAsAAAbgXQAbgWAAgoQAAgkgYgUQgYgUgpAAQgeAAgTAEg");
	this.shape_13.setTransform(-129.1,2.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-13,273.2,26);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0EEEF").s().p("AkRESQhxhcgBiDIADgbIgDAAIAAmGIMHAAIAAGGIgCAAQACANAAAOQAACDhyBcQhyBdigAAQifAAhyhdg");
	this.shape.setTransform(93.1,41.2,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0EEEF").s().p("AkQESQhzhcABiDIABgbIgBAAIAAmGIMFAAIAAGGIgBAAQACANgBAOQAACDhxBcQhxBdihAAQifAAhxhdg");
	this.shape_1.setTransform(31,41.2,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0EEEF").s().p("AkRESQhxhcgBiDQABgOABgNIgCAAIAAmGIMGAAIAAGGIgCAAIACAbQABCDhyBcQhyBdigAAQifAAhyhdg");
	this.shape_2.setTransform(-31,41.2,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0EEEF").s().p("AkRESQhyhcABiDQAAgOABgNIgBAAIAAmGIMGAAIAAGGIgCAAIACAbQgBCDhxBcQhyBdigAAQigAAhxhdg");
	this.shape_3.setTransform(-93.1,41.2,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D60000").s().p("AkRESQhxhcAAiDIACgbIgCAAIAAmGIMGAAIAAGGIgCAAQABANABAOQgBCDhxBcQhyBdigAAQifAAhyhdg");
	this.shape_4.setTransform(124.1,41.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D60000").s().p("AkQESQhzhcAAiDIACgbIgCAAIAAmGIMGAAIAAGGIgBAAQABANAAAOQABCDhyBcQhxBdihAAQifAAhxhdg");
	this.shape_5.setTransform(62.1,41.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D60000").s().p("AkRESQhxhcAAiDQAAgOABgNIgBAAIAAmGIMFAAIAAGGIgBAAQABANAAAOQAACDhxBcQhyBdigAAQifAAhyhdg");
	this.shape_6.setTransform(0,41.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D60000").s().p("AkRESQhyhcABiDQgBgOACgNIgBAAIAAmGIMGAAIAAGGIgCAAIACAbQgBCDhxBcQhyBdigAAQigAAhxhdg");
	this.shape_7.setTransform(-62.1,41.2,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D60000").s().p("AkRESQhyhcAAiDQAAgOACgNIgCAAIAAmGIMHAAIAAGGIgDAAIADAbQAACDhyBcQhyBdigAAQifAAhyhdg");
	this.shape_8.setTransform(-124.2,41.2,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0463F").s().p("AiMFUQj8lMjwlbIJ5AAQEuFVFKFSg");
	this.shape_9.setTransform(114.2,13.6,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjSFUQi0lKisldIJ4AAQDxFbD8FMg");
	this.shape_10.setTransform(86,13.6,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0463F").s().p("AkYFUQhwlVhklSIJ5AAQCsFdC0FKg");
	this.shape_11.setTransform(57.8,13.6,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlfFUQgnllgflCIJ4AAQBjFSBwFVg");
	this.shape_12.setTransform(29.7,13.6,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0463F").s().p("AmCFUQAmllAglCIJ5AAQAgFCAmFlg");
	this.shape_13.setTransform(0,13.6,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmlFUQBok/BrloIJ4AAQgfFCgnFlg");
	this.shape_14.setTransform(-29.6,13.6,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0463F").s().p("AnsFUQCzlKCtldIJ5AAQhrFohpE/g");
	this.shape_15.setTransform(-57.8,13.6,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AoyFUQD9lMDwlbIJ4AAQitFdizFKg");
	this.shape_16.setTransform(-86,13.6,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0463F").s().p("Ap4FUQFAlIE4lfIJ6AAQjwFbj9FMg");
	this.shape_17.setTransform(-114.2,13.6,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CBD0D4").s().p("AfIEeQhrhagDiAQgCCBhsBaQhsBbicAAQibAAhthcQhrhagDiAQgCCBhsBaQhsBbibAAQicAAhthcQhrhagDiAQgBCBhsBaQhtBbibAAQiaAAhthcQhqhagDiAQgCCBhsBaQhsBbicAAQibAAhuhcQhqhagDiAQgCCBhsBaQhsBbibAAQicAAhthcQhrhagDiAQgBCBhsBaQhtBbibAAQicAAhthcQhdhPgOhsQgNBshbBOQhrBZiZABIgFAAIAArwMBcyAAAIAALwQiWgFhjhaQhOhGgRhdQgSBhhXBJQhtBbibAAQibAAhthcgAdaA5QAAgQACAAIgEAAQACAAAAAQgARuA5QAAgQACAAIgEAAQACAAAAAQgAGCA5QABgQABAAIgDAAQABAAAAAQgAlnA5QAAgQABAAIgDAAQACAAAAAQgAxTA5QAAgQACAAIgEAAQACAAAAAQgA8/A5QABgQABAAIgDAAQABAAAAAQgEgoqAAtIABgEIgDAAIACAEgEApFAAsIACgDIgDAAIABADg");
	this.shape_18.setTransform(0,52,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.6,0,279.3,67.1);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBKQgFgGgBgMQgGAYgUAAQgLAAgHgJQgHgKAAgNQAAgOALgQQAKgPAegVIAAgPIgBgXQgDgLgHAAQgHAAgFAFQgGAIADAHIAHAJQACAEAAAEQAAAHgFAEQgEAEgGAAQgHAAgEgEQgFgFAAgJQABgNAFgLQAGgLALgGQALgGAKAAQAaAAAFAeQACAHAAAZIAABFIACAEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQACAAACgDIAGAGQgFAMgGAFQgFAGgJAAQgIAAgFgHgAgRAXQgIASALAIQALAHAHgOIAAgxQgKAJgLAVg");
	this.shape.setTransform(45.3,-5,1.44,1.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABwIAAgIQAKAAADgDQADgCACgGQABgEAAgTIAAiOQAAgQgBgEQgCgFgDgDQgDgDgKAAIAAgIIByAAIAAA9IgJAAIgBgWQgBgLgEgFQgHgKgOAAIgaAAIAAA2QAugBASAYQANARAAAnQgBApgNAQQgPAUgfAAgAgMBSQAAAJADAFQADAEAFAAQAHAAAHgGQAGgFAFgMQAFgQAAgcQgBgcgFgNQgFgNgIgFQgIgFgOAAg");
	this.shape_1.setTransform(25.9,-9.9,1.44,1.44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBwIAAgIIAEAAQAHAAADgEQADgCABgGQACgDAAgSIAAipIgLAAQgOAAgGAKQgEAFgBALIgCAWIgJAAIAAg9IB9AAIAAA9IgJAAIgCgWQgBgLgEgFQgGgKgOAAIgLAAIAACpQAAASACAEQABAFADADQAEADAGAAIAEAAIAAAIg");
	this.shape_2.setTransform(4.2,-9.9,1.44,1.44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGBwIAAgIQABAAABAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgGgEgIIgRgrIgGAKIAAAZQAAATACAEQACAEAGABIAAAIIgyAAIAAgIQAGgBADgFQABgEAAgSIAAiXQAAgSgCgEQgBgEgHgCIAAgIIAoAAIAACQIAdgvQAEgGgCgGQgCgHgKAAIAAgIIAsAAIAAAIQgHABgEAEQgFAEgMASIgMAQIAXA1QAKAZAGAKQAEAGAFAAIAAAIg");
	this.shape_3.setTransform(81.6,-9.9,1.44,1.44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBwIAAgIIAEAAQAGAAAEgEQADgCABgGQACgDgBgSIAAiSIgvC7IgHAAIg0i+IAACjQACAJAFAFQAEAFAJAAIAAAIIgzAAIAAgIIACAAQAFAAADgDQAFgCABgEQADgFABgIIAAiZQAAgRgBgEQgBgEgEgDQgEgEgGAAIgEAAIAAgIIA6AAIAlCTIAniTIA5AAIAAAIIgEAAQgHAAgEAEQgDADgBAFQAAACAAASIAACOQAAATAAADQACAEADAEQAEADAGAAIAEAAIAAAIg");
	this.shape_4.setTransform(-21.9,-9.9,1.44,1.44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFBNIAAgIQAGgBABgFQACgEAAgSIAAglIgcAAIAAAlQAAASACAEQADAFAFABIAAAIIgyAAIAAgIQAHgBACgFQACgEAAgSIAAhRQAAgSgCgEQgCgFgHgBIAAgIIAyAAIAAAIQgFABgDAFQgCAEAAASIAAAjIAcAAIAAgjQAAgSgCgEQgBgFgGgBIAAgIIAyAAIAAAIQgHABgCAFQgCAEAAASIAABRQAAASACAEQACAFAHABIAAAIg");
	this.shape_5.setTransform(62.6,-4.8,1.44,1.44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB9BmIjGhRQgIgDAAAGQABADADAGIgRgXQgEgFADgEQADgBAFAAIDbBbQAJAEAIgMQgFALgFAGQgCADgEAAIgIgBgACHBOIjxhmQgFgCgBAGQAAAEAGAKIgVgeQgEgGAFgFQAFgEAFADIEABxQANAGAFgPIgFARQgCAFgFABIgEABIgHgCgACPAwIkVh4QgDgBgCABQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAEAOIgVgiQgEgIAFgEQAFgEAFADIEhCEQAOAHACgQIABAUQgBAGgFABIgEABQgEAAgDgCg");
	this.shape_6.setTransform(-66.7,-15.6,1.44,1.44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOBTQgigfgDguQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQACgCADABIC+BIQAFACAEgCQgkApg2AAQgtAAgigggABkgRIikhNQAfgUAiAAQAqAAAhAbQAgAbAIAoQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQgCABgDAAQgEAAgFgCg");
	this.shape_7.setTransform(-60.7,-10.4,1.44,1.44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPApIAAgvIAAAAIgbAvIgMAAIAAg5IAKAAIAAAvIAagvIANAAIAAA5gAgOgpIAIAAQAAAKAGAAQAGAAACgKIAHAAQgBAQgOAAQgOAAAAgQg");
	this.shape_8.setTransform(86.1,20.9,1.44,1.44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAdIAAgvIAAAAIgbAvIgMAAIAAg5IALAAIgBAvIAagvIANAAIAAA5g");
	this.shape_9.setTransform(76.2,22.7,1.44,1.44);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAdIAAgbIgbAAIAAAbIgLAAIAAg5IALAAIAAAYIAbAAIAAgYIALAAIAAA5g");
	this.shape_10.setTransform(66.4,22.7,1.44,1.44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAXQgIgJAAgNQAAgMAHgJQAJgKALAAQANAAAGAKQAFAIAAAKIgBAEIgnAAQAAAUASAAQAIAAAJgDIACAIQgJAEgLAAQgMAAgIgIgAgKgQQgDAFgBAHIAdAAQABgSgQAAQgFAAgFAGg");
	this.shape_11.setTransform(57.1,22.7,1.44,1.44);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAdIAAg5IALAAIAAAxIAVAAIAAgxIAJAAIAAAxIAUAAIAAgxIALAAIAAA5g");
	this.shape_12.setTransform(46.1,22.7,1.44,1.44);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAXQgIgJAAgNQAAgMAHgJQAIgKALAAQANAAAHAKQAFAIAAAKIgBAEIgnAAQAAAUASAAQAIAAAJgDIACAIQgIAEgMAAQgMAAgIgIgAgKgQQgDAFgBAHIAdAAQABgSgQAAQgFAAgFAGg");
	this.shape_13.setTransform(35.1,22.7,1.44,1.44);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAqIgBhSIAKAAIABAKQAHgLAMAAQALAAAHAIQAHAJAAANQAAAOgIAIQgHAIgMAAQgLAAgFgJIAAAggAgJgdQgFAEgBAGIAAAEIAAALIAAAEQAEALALAAQAIAAAEgHQAFgEABgKQAAgKgFgGQgFgHgIAAQgEAAgFAEg");
	this.shape_14.setTransform(25.8,24.3,1.44,1.44);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAOAdIgOgXIAAAAIgOAXIgMAAIAWgdIgVgcIANAAIAMAWIAOgWIAMAAIgUAcIAVAdg");
	this.shape_15.setTransform(12.6,22.7,1.44,1.44);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAdIABgvIgBAAIgaAvIgNAAIAAg5IAKAAIgBAvIABAAIAJgSIARgdIANAAIAAA5g");
	this.shape_16.setTransform(3.6,22.7,1.44,1.44);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdAdIgFgNQgFgNgMAAIgCAAIAAAaIgIAAIAAgaIgDAAQgMAAgFANQgCAHgDAGIgLAAIAGgQQAGgNAMgBIgXgbIAMAAIAUAaIADAAIAAgaIAIAAIAAAaIACAAIATgaIANAAIgXAbQAMABAGANIAGAQg");
	this.shape_17.setTransform(-7.3,22.7,1.44,1.44);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAXQgIgJAAgNQAAgMAHgJQAIgKALAAQANAAAHAKQAFAIAAAKIgBAEIgoAAQABAUASAAQAJAAAHgDIADAIQgJAEgMAAQgLAAgIgIgAgJgQQgEAFgCAHIAfAAQgBgSgPAAQgFAAgEAGg");
	this.shape_18.setTransform(-17.7,22.7,1.44,1.44);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAdIAAg5IATgBQAYAAAAAPQAAALgNACIAAAAQAQABgBAMQAAASgdAAIgQgBgAgMAWIAJAAQAPAAABgKQgBgKgQAAIgIAAgAgMgVIAAASIAIAAQAOgBAAgJQAAgIgOgBIgIABg");
	this.shape_19.setTransform(-26.3,22.7,1.44,1.44);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAWQgIgIAAgOQAAgMAIgJQAKgJAMAAQAIAAAHAEIgDAIQgDgDgJAAQgIAAgGAHQgFAGAAAIQAAAKAGAGQAFAGAIAAQAEAAAJgDIACAIQgHAEgLAAQgLAAgIgJg");
	this.shape_20.setTransform(-35,22.7,1.44,1.44);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAdIgGgMQgGgOgLAAIgDAAIAAAaIgKAAIAAg5IAKAAIAAAaIADAAIAUgaIAOAAIgYAbQALABAHAPQAEALACADg");
	this.shape_21.setTransform(-46.4,22.7,1.44,1.44);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAdIAAgbIgbAAIAAAbIgLAAIAAg5IALAAIAAAYIAbAAIAAgYIALAAIAAA5g");
	this.shape_22.setTransform(-56.2,22.7,1.44,1.44);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAZQgGgEAAgHQAAgVAiAAIAAgBQAAgOgLAAQgJAAgGAFIgDgHQAIgGAKAAQAWAAAAAZIAAAUIABAOIgKAAIgBgHQgGAJgKAAQgJAAgEgGgAgMAMQAAALALAAQAJAAADgKIABgEIAAgJQgXAAgBAMg");
	this.shape_23.setTransform(-65.6,22.7,1.44,1.44);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAoIAAhRIAtAAIAAAJIgiAAIAAAXIAKgBQALAAAIAGQALAFAAANQAAAMgHAGQgJAKgTgBIgQgBgAgOgBIAAAhIAJABQAJAAAGgGQAFgFgBgIQAAgJgGgEQgGgDgIAAg");
	this.shape_24.setTransform(-74.1,21.1,1.44,1.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-30.5,179.5,61);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#083F67").s().p("Am1AlIAAhJINrAAIAABJg");
	this.shape.setTransform(18.7,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#083F67").s().p("An6AlIAAhJIP1AAIAABJg");
	this.shape_1.setTransform(18.5,-24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#083F67").s().p("Ao2F7QgMAAgKgHQgKgHgEgMIjWqrQgFgRALgQQALgPATAAIYZAAQATAAALAPQAMAQgGARIixJqQgCAngdAaQgcAagpAAgAobEwIQ3AAQAKAAAHgGQAIgFAAgLIACgLIClo+I21AAg");
	this.shape_2.setTransform(17.9,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#083F67").s().p("ADaJ0QgPgFgHgNQgHgOAEgPIA2isIkpt+Ij1hGQgPgEgIgNQgHgOAEgPQAEgPAOgHQANgIAPAEIEJBMQAQAFAHATIE0OcQAFAMgEAKIg5C4QgEAMgKAHQgKAHgMAAIgLgBg");
	this.shape_3.setTransform(-67.5,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#083F67").s().p("AkUAlQgPAAgLgLQgLgLAAgPQAAgOALgLQALgLAPAAIIpAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAg");
	this.shape_4.setTransform(2.5,59.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#083F67").s().p("AikClQhFhEAAhhQAAhfBFhFQBFhFBfAAQBhAABEBFQBFBFAABfQAABhhFBEQhEBFhhAAQhfAAhFhFgAhvhvQgvAvAABAQAABBAvAvQAvAvBAAAQBBAAAvgvQAvgvAAhBQAAhAgvgvQgvgvhBAAQhAAAgvAvg");
	this.shape_5.setTransform(49.9,59.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#083F67").s().p("AikClQhEhEAAhhQAAhfBEhFQBEhFBgAAQBgAABFBFQBFBFAABfQAABhhFBEQhFBFhgAAQhfAAhFhFgAhvhvQgvAvAABAQAABBAvAvQAvAvBAAAQBBAAAvgvQAvgvAAhBQAAhAgvgvQgvgvhBAAQhAAAgvAvg");
	this.shape_6.setTransform(-47.6,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-82.9,199.8,165.9);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30AEDF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.arr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B8EF").s().p("AEEFdIpgpfQgTgTAAgaQAAgbATgSQASgTAbAAQAaAAATATIJfJfQATATAAAaQAAAagTATQgSATgaAAQgbAAgSgTg");
	this.shape.setTransform(11.1,10.9,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28B8EF").s().p("AiJO/QgTAAgQgKQgQgLgHgSIr37+QgHgSAEgTQADgTAOgOQAOgOATgDQATgEASAIIb+L2QASAHALAQQAKAQAAATQAAATgKAQQgKAQgSAIIq5EvIkuK4QgIARgQALQgPAKgTAAgAiILfID+pIQAKgXAWgKIJJj+I3mp/g");
	this.shape_1.setTransform(0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("At/t/Ib/L2IrQE5Ik4LQg");
	this.shape_2.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-19.2,38.4,38.4);


(lib.t3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.t2 = new lib.Symbol15();
	this.t2.setTransform(45.9,-63.9);

	this.t1 = new lib.Symbol14();
	this.t1.setTransform(-81.3,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

	// pl
	this.pl = new lib.Symbol13();
	this.pl.setTransform(-137.7,-64,1,1,0,0,0,-137.7,0);

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

	// Layer 2
	this.l3 = new lib.Symbol18();
	this.l3.setTransform(96.5,31.7,0.5,0.5,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.l3).wait(1));

	// Layer 1
	this.l2 = new lib.Symbol17();
	this.l2.setTransform(-55.5,72.1,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(1));

	// Layer 2
	this.l1 = new lib.Symbol16();
	this.l1.setTransform(-66.5,12.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-89.6,275.5,176.1);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t4 = new lib.Symbol9();
	this.t4.setTransform(57.8,58.7);

	this.t3 = new lib.Symbol8();
	this.t3.setTransform(-83.7,60.9);

	this.t2 = new lib.Symbol7();
	this.t2.setTransform(-0.1,1.7);

	this.t1 = new lib.Symbol6();
	this.t1.setTransform(-0.1,-60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

	// Layer 3
	this.pl = new lib.Symbol10();
	this.pl.setTransform(-23,60.5,1,1,0,0,0,-79.4,0);

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.8,-77.7,271.6,156.4);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t123
	this.t2 = new lib.Symbol4();

	this.t3 = new lib.Symbol3();
	this.t3.setTransform(0,63.3);

	this.t1 = new lib.Symbol2();
	this.t1.setTransform(0,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t3},{t:this.t2}]}).wait(1));

	// pl
	this.pl = new lib.Symbol5();
	this.pl.setTransform(-136.7,-0.1,1,1,0,0,0,-136.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-76,273.3,152.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol45();
	this.t2.setTransform(-0.2,13.9);

	this.t1 = new lib.Symbol44();
	this.t1.setTransform(-28.9,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-26.6,174.1,54.9);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.mc = new lib.Symbol40();
	this.mc.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// Layer 1
	this.instance = new lib.Symbol40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-28.3,183.8,51.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.pig = new lib.Symbol34();
	this.pig.setTransform(0,98.2,1,1,0,0,0,0,42);

	this.timeline.addTween(cjs.Tween.get(this.pig).wait(1));

	// Layer 1
	this.c1 = new lib.Symbol37();
	this.c1.setTransform(10.3,52.4);

	this.c3 = new lib.Symbol36();
	this.c3.setTransform(21.4,52.4);

	this.c2 = new lib.Symbol35();
	this.c2.setTransform(-11.7,52.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c2},{t:this.c3},{t:this.c1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,12.6,111.8,87.3);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.arr = new lib.Symbol24();
	this.arr.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// Layer 1
	this.c4 = new lib.Symbol28();
	this.c4.setTransform(21.3,10.8);

	this.c3 = new lib.Symbol27();
	this.c3.setTransform(6.7,3);

	this.c2 = new lib.Symbol26();
	this.c2.setTransform(-14,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c2},{t:this.c3},{t:this.c4}]}).wait(1));

	// Layer 3
	this.c1 = new lib.Symbol25();
	this.c1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.4,80.6,77);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l7 = new lib.Symbol11();
	this.l7.setTransform(0.1,24,1,1,90,0,0,7.4,0);

	this.l6 = new lib.Symbol11();
	this.l6.setTransform(-17.1,17.3,1,1,135,0,0,7.8,-0.1);

	this.l5 = new lib.Symbol11();
	this.l5.setTransform(-23.9,0.1,1,1,-180,0,0,7.4,0);

	this.l4 = new lib.Symbol11();
	this.l4.setTransform(-17,-16.8,1,1,-135,0,0,7.4,-0.1);

	this.l3 = new lib.Symbol11();
	this.l3.setTransform(-0.1,-23.9,1,1,-90,0,0,7.4,-0.1);

	this.l2 = new lib.Symbol11();
	this.l2.setTransform(17,-17,1,1,-45,0,0,7.4,0.1);

	this.l1 = new lib.Symbol11();
	this.l1.setTransform(24,-0.1,1,1,0,0,0,7.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6},{t:this.l7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,47.9,47.9);


(lib.cvc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l1 = new lib.Symbol22();
	this.l1.setTransform(-40.9,0.4);

	this.a3 = new lib.Symbol21();
	this.a3.setTransform(-56.6,0.4);

	this.a2 = new lib.Symbol20();
	this.a2.setTransform(-73.2,0.4);

	this.a1 = new lib.Symbol19();
	this.a1.setTransform(-89.8,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DOIiFmbIBmAAIAzCvQAaBZAKA4IAAAAQAPhDAXhNIA0iwIBkAAIiLGbg");
	this.shape.setTransform(88.5,0.4,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5DOIiEmbIBmAAIAzCvQAaBZAKA4IAAAAQAPhDAXhNIA0iwIBkAAIiLGbg");
	this.shape_1.setTransform(70.9,0.4,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCaQg2g4AAhcQAAhlBCg8QA+g5BfAAQAiAAAdAHQAZAEAOAIIgTBKQgjgPgrAAQg7AAghAiQgmAkAABBQAAA+AjAkQAhAlA+AAQArAAAjgOIAOBJQgOAHgaAFQgfAGgjgBQhmAAg6g6g");
	this.shape_2.setTransform(53.7,0.4,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#083F67").s().p("Ao+IgQgxAAgjgjQgjgjgBgxIAAtQQABgyAjgjQAjgkAxAAIR8AAQAyAAAkAkQAiAjAAAyIAANQQAAAxgiAjQgkAjgyAAg");
	this.shape_3.setTransform(71.7,0.4,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#083F67").s().p("Egi4ALSQhXAAg9g+Qg+g9AAhWIAAwAQAAhXA+g+QA9g9BXAAMBFxAAAQBXAAA9A9QA+A+AABXIAAQAQAABWg+A9Qg9A+hXAAgEgkugJ1QgxAwAABGIAAQAQAABEAxAyQAxAxBFgBMBFxAAAQBFABAxgxQAxgyAAhEIAAwAQAAhGgxgwQgxgyhFAAMhFxAAAQhFAAgxAyg");
	this.shape_4.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.l1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,-32.5,219.9,65);


(lib.curs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.arr = new lib.arr();
	this.arr.setTransform(-0.1,0,1,1,0,0,0,-17.1,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// lines
	this.lines = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.lines).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,60.2,60.4);


(lib.t4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.Symbol39();
	this.btn.setTransform(0,70.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer 1
	this.t3 = new lib.Symbol31();
	this.t3.setTransform(0,6.2);

	this.t2 = new lib.Symbol30();
	this.t2.setTransform(0,-37.9);

	this.t1 = new lib.Symbol29();
	this.t1.setTransform(0,-73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

	// Layer 3
	this.pl = new lib.Symbol32();
	this.pl.setTransform(0,6.2);

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.6,-89.8,275.3,183.6);


(lib.laptop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// pig
	this.pig = new lib.Symbol33();
	this.pig.setTransform(4.7,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.pig).wait(1));

	// cl
	this.cl = new lib.Symbol23();
	this.cl.setTransform(115.5,-72.6);

	this.timeline.addTween(cjs.Tween.get(this.cl).wait(1));

	// tent
	this.tent = new lib.Symbol1();
	this.tent.setTransform(-0.2,-84);

	this.timeline.addTween(cjs.Tween.get(this.tent).wait(1));

	// cur
	this.cur = new lib.curs();
	this.cur.setTransform(88,30.5);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyjJrIAAzVMAlIAAAIAATVg");
	mask.setTransform(-0.2,5.1);

	// Layer 1
	this.cvc = new lib.cvc();
	this.cvc.setTransform(0,10.5);

	this.cvc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.cvc).wait(1));

	// cart
	this.cart = new lib.cart();
	this.cart.setTransform(2,25,0.4,0.4);

	this.cart.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.cart).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBD0D4").s().p("Eg4kAAeIAAg7MBxJAAAIAAA7g");
	this.shape.setTransform(-0.1,83.2,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg1SABtQhYABg8g+Qg+g8AAhgMBxJAAAQAABgg+A8Qg8A+hYgBg");
	this.shape_1.setTransform(-0.1,88.9,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgtMAc4QghAAgYgXQgXgXAAghMAAAg3RQAAghAXgXQAYgXAhAAMBaZAAAQAhAAAYAXQAXAXAAAhMAAAA3RQAAAhgXAXQgYAXghAAg");
	this.shape_2.setTransform(-0.1,-6.4,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032F50").s().p("EgHdAiTQhVi3ismeQigmGhkjOQinlmi1nPQgfhRkWriQhfjphjlUQhsmDg8jGQghhag3hxIhljDMBBDAAAQBkAABHBHQBHBGAABlMAAAA+RQAABDgvAwQgwAvhCAAg");
	this.shape_3.setTransform(41.8,-5.5,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#083F67").s().p("Aq6NuQgbAAgTgTQgSgTAAgbIAA45QAAgoAcgcQAcgdAoAAILjAAIAoBOQAXAuAMAjQAZBQArCaQAoCJAmBdIB7FGQBIC5BDCPQAoBTBACcQBFCmAiBJg");
	this.shape_4.setTransform(-53.7,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.9,-111.1,302.5,204.4);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		var time2 = 3.5;
		var time3 = time2+4.0;
		var time4 = time3+5.0;
		
		var ease = Power0.easeNone
		TweenMax.to(r.laptop.cvc.l1, 0.3, {alpha:0, yoyo:true, repeat:-1, repeatDelay:0.0, ease:ease}, 0.0)
		TweenMax.from(r.laptop.pig.c1, 0.7, {y:"-=300", yoyo:false, repeat:-1, repeatDelay:0.0, ease:ease, delay:0.0}, 0.0)
		TweenMax.from(r.laptop.pig.c2, 0.8, {y:"-=300", yoyo:false, repeat:-1, repeatDelay:0.0, ease:ease, delay:0.1}, 0.0)
		TweenMax.from(r.laptop.pig.c3, 0.9, {y:"-=300", yoyo:false, repeat:-1, repeatDelay:0.0, ease:ease, delay:0.2}, 0.0)
		
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 0.2, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.logo, 0.7, {y:"+=150", alpha:0, ease:Expo.easeOut}, 0.2)
		  .staggerFrom([r.tel.t1, r.tel.t2], 0.7, {y:"+=150", alpha:0, ease:Expo.easeOut}, 0.1, 0.40)
		  .from(r.laptop, 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.2)
		  .from(r.laptop.tent, 1.3, {y:"+=50", alpha:0, ease:Elastic.easeOut.config(0.9,0.4)}, 1.0)
		  .from(r.laptop.cart, 0.9, {x:"-=350", ease:Expo.easeOut}, 1.4)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  .from(r.t1.pl, 1.0, {scaleX:0.0, ease:Expo.easeInOut}, 0.5)
		  
		  
		  //2
		  .staggerTo([r.t1.t3, r.t1.pl, r.t1.t2, r.t1.t1], 0.6, {y:"+=250", alpha:0, ease:Expo.easeIn}, 0.03, time2+0.0)
		  .staggerFrom([r.t2.t1, r.t2.t2, r.t2.t3, r.t2.pl, r.t2.t4], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.50)
		  .from(r.t2.pl, 1.0, {scaleX:0.0, ease:Expo.easeInOut}, time2+0.5)
		  
		  .from(r.laptop.cur.arr, 1.3, {x:"+=250", y:"+=450", scaleX:3.0, scaleY:3.0, rotation:"-=180", ease:Expo.easeOut}, time2+0.9)
		  .to(r.laptop.cur.arr, 0.1, {scaleX:0.7, scaleY:0.7, ease:Power0.easeNone}, time2+2.3)
		  .to(r.laptop.cur.arr, 0.4, {scaleX:1.0, scaleY:1.0, ease:Expo.easeOut}, time2+2.5)
		  
		  
		  //3
		  .staggerTo([r.t2.t4, r.t2.pl, r.t2.t3, r.t2.t2, r.t2.t1], 0.6, {y:"+=250", alpha:0, ease:Expo.easeIn}, 0.03, time3+0.0)
		  .to(r.laptop.cur.arr, 0.7, {x:"+=50", y:"+=450", rotation:"-=180", ease:Expo.easeIn}, time3+0.3)
		  .to(r.laptop.cart, 0.7, {x:"+=250", ease:Expo.easeIn}, time3+0.3)
		  .to(r.laptop.tent, 0.4, {y:"+=80", alpha:0, ease:Back.easeIn}, time3+0.5)
		  
		  .staggerFrom([r.t3.pl, r.t3.t1, r.t3.t2], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time3+0.50)
		  .from(r.t3.pl, 1.0, {scaleX:0.0, ease:Expo.easeInOut}, time3+0.5)
		  .staggerFrom([r.t3.l1, r.t3.l2, r.t3.l3], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time3+0.80)
		  
		  .from(r.laptop.cvc, 0.9, {x:"-=250", ease:Expo.easeOut}, time3+1.0)
		  .from(r.laptop.cvc.l1, 0.6, {x:-90, ease:Sine.easeInOut}, time3+2.0)
		  .staggerFrom([r.laptop.cvc.a1, r.laptop.cvc.a2, r.laptop.cvc.a3], 0.4, {scaleX:0.0, scaleY:0.0, ease:Expo.easeOut}, 0.2, time3+2.20)
		  
		  .from(r.laptop.cl.arr, 1.8, {rotation:"-=360", alpha:0, ease:Expo.easeInOut}, time3+2.0)
		  .staggerFrom([r.laptop.cl.c1, r.laptop.cl.c2, r.laptop.cl.c3, r.laptop.cl.c4], 1.2, {x:0, y:0, scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.2, time3+2.00)
		  
		  
		  //4
		  .to(r.laptop.cl, 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, time4+0.0)
		  .to(r.laptop.cvc, 0.7, {x:"+=250", ease:Expo.easeIn}, time4+0.0)
		  .staggerTo([r.t3.l2, r.t3.l1, r.t3.l3, r.t3.pl, r.t3.t1, r.t3.t2], 0.6, {y:"+=250", alpha:0, ease:Expo.easeIn}, 0.03, time4+0.0)
		  
		  .staggerFrom([r.t4.t1, r.t4.t2, r.t4.pl, r.t4.t3], 0.9, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time4+0.60)
		  .from(r.t4.pl, 1.0, {scaleX:0.0, ease:Expo.easeInOut}, time4+0.6)
		  
		  .from(r.laptop.pig.pig, 1.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut.config(0.9,0.4)}, time4+1.0)
		  .staggerFrom([r.laptop.pig.c1, r.laptop.pig.c2, r.laptop.pig.c3], 0.6, {alpha:0, ease:Expo.easeOut}, 0.1, time4+1.30)
		  
		  .from(r.t4.btn, 1.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut.config(0.9,0.4)}, time4+1.2)
		  .to(r.t4.btn.mc, 0.2, {y:0, ease:Power0.easeNone}, time4+2.5)
		  .to(r.t4.btn.mc, 0.2, {y:"-=5", ease:Power0.easeNone}, time4+3.0)
		  
		  
		  
		  .call(replay)
		  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18)
		  ;
		
		
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			tl.play(0);
			blink();
		}
		  
		  
		var z = r.laptop.cur.lines;
		function blink() {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  TweenMax.set(z[currObj], {scaleX:1, scaleY:1});
				  TweenMax.from(z[currObj], 0.2, {x:0, y:0, scaleX:0, scaleY:0, ease:Power0.easeNone, delay:(56-i)*0.0+time2+2.4});
				  TweenMax.to(z[currObj], 0.2, {scaleX:0, scaleY:0, ease:Power0.easeNone, delay:(56-i)*0.0+time2+2.6});
				  }
			i++;
			 }
		}
		blink();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,8.333,0.625);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(-369.9,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tel
	this.tel = new lib.Symbol41();
	this.tel.setTransform(-363.5,53.2);

	this.timeline.addTween(cjs.Tween.get(this.tel).wait(1));

	// t4
	this.t4 = new lib.t4();
	this.t4.setTransform(281,0);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(281,0);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(281,0);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(281,0);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// laptop
	this.laptop = new lib.laptop();
	this.laptop.setTransform(-69.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.laptop).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30AEDF").s().p("EicOATiMAAAgnDME4dAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-125,2000,250);


// stage content:
(lib.mtb_100pcx250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("./ext_click/?redirect_uri="+encodeURIComponent("https://www.mtbank.by/smallbusiness/acquiring/internet?utm_source=tutby&utm_medium=banner&utm_campaign=acquiring_gomel&utm_content=100_250"), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn = new lib.link();
	this.btn.setTransform(1000,125,11.111,0.833);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EicOATiMAAAgnDME4dAAAMAAAAnDg");
	mask.setTransform(1000,125);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(1000,125);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1000,125,2000,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;