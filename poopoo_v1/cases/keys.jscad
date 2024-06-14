function key_sockets_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[70,36.4],[82,36.4]]).appendArc([83,37.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,49.4]).appendArc([82,50.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,50.4]).appendArc([69,49.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,37.4]).appendArc([70,36.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[70,17.4],[82,17.4]]).appendArc([83,18.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,30.4]).appendArc([82,31.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,31.4]).appendArc([69,30.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,18.4]).appendArc([70,17.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70,-1.6],[82,-1.6]]).appendArc([83,-0.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,11.4]).appendArc([82,12.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,12.4]).appendArc([69,11.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,-0.6]).appendArc([70,-1.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,59],[63,59]]).appendArc([64,60],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,72]).appendArc([63,73],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,73]).appendArc([50,72],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,60]).appendArc([51,59],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,40],[63,40]]).appendArc([64,41],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,53]).appendArc([63,54],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,54]).appendArc([50,53],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,41]).appendArc([51,40],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,21],[63,21]]).appendArc([64,22],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,34]).appendArc([63,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,35]).appendArc([50,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,22]).appendArc([51,21],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,2],[63,2]]).appendArc([64,3],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,15]).appendArc([63,16],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,16]).appendArc([50,15],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,3]).appendArc([51,2],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,59],[44,59]]).appendArc([45,60],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,72]).appendArc([44,73],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,73]).appendArc([31,72],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,60]).appendArc([32,59],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,40],[44,40]]).appendArc([45,41],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,53]).appendArc([44,54],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,54]).appendArc([31,53],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,41]).appendArc([32,40],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,21],[44,21]]).appendArc([45,22],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,34]).appendArc([44,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,35]).appendArc([31,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,22]).appendArc([32,21],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,2],[44,2]]).appendArc([45,3],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,15]).appendArc([44,16],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,16]).appendArc([31,15],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,3]).appendArc([32,2],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,59],[25,59]]).appendArc([26,60],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,72]).appendArc([25,73],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,73]).appendArc([12,72],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,60]).appendArc([13,59],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,40],[25,40]]).appendArc([26,41],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,53]).appendArc([25,54],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,54]).appendArc([12,53],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,41]).appendArc([13,40],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,21],[25,21]]).appendArc([26,22],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,34]).appendArc([25,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,35]).appendArc([12,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,22]).appendArc([13,21],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,50],[6,50]]).appendArc([7,51],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,63]).appendArc([6,64],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,64]).appendArc([-7,63],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,51]).appendArc([-6,50],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,31],[6,31]]).appendArc([7,32],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,44]).appendArc([6,45],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,45]).appendArc([-7,44],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,32]).appendArc([-6,31],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,12],[6,12]]).appendArc([7,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,25]).appendArc([6,26],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,26]).appendArc([-7,25],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,13]).appendArc([-6,12],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70,55.4],[82,55.4]]).appendArc([83,56.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,68.4]).appendArc([82,69.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,69.4]).appendArc([69,68.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,56.4]).appendArc([70,55.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 1.3] });
}




                function keys_case_fn() {
                    

                // creating part 0 of case keys
                let keys__part_0 = key_sockets_extrude_1_3_outline_fn();

                // make sure that rotations are relative
                let keys__part_0_bounds = keys__part_0.getBounds();
                let keys__part_0_x = keys__part_0_bounds[0].x + (keys__part_0_bounds[1].x - keys__part_0_bounds[0].x) / 2
                let keys__part_0_y = keys__part_0_bounds[0].y + (keys__part_0_bounds[1].y - keys__part_0_bounds[0].y) / 2
                keys__part_0 = translate([-keys__part_0_x, -keys__part_0_y, 0], keys__part_0);
                keys__part_0 = rotate([0,0,0], keys__part_0);
                keys__part_0 = translate([keys__part_0_x, keys__part_0_y, 0], keys__part_0);

                keys__part_0 = translate([0,0,0], keys__part_0);
                let result = keys__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return keys_case_fn();
            }

        